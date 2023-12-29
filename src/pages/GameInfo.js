import React, { useEffect, useState } from "react";
import "../App.css";

const GameInfo = () => {
    const [getData, setData] = useState([0]);
    const [getKillData, setKillData] = useState([0]);
    const [getTeamsData, setTeamsData] = useState([0]);
    const [getError, setError] = useState(null);

    useEffect(() => {
        if (!getError) {
            Promise.all([
                fetch('http://localhost:3001/gameinformation'),
                fetch('http://localhost:3001/killfeed'),
                fetch('http://localhost:3001/teams'),
            ])
                .then(([resGI, resKF, resT]) =>
                    Promise.all([resGI.json(), resKF.json(), resT.json()])
                )
                .then(([resGI, resKF, resT]) => {
                    setData(resGI);
                    setKillData(resKF);
                    setTeamsData(resT);
                })
                .catch(err => {
                    setError(err.message);
                });
        }
    }, [getError, getData, getKillData, getTeamsData]);

    return (
        <div className="GameInfo">
            {!getError &&
                <><h1>Current Game Information</h1><div id="gameinfocontainer">
                    <h2>Players Left: {getData[0].players_left}</h2>
                    <h2>Border Size: {getData[0].border_size}</h2>
                    <h2>Game Time: {getGameTimeFormatted(getData[0].game_time)}</h2>
                    <h2>Game State: {getData[0].game_state}</h2>
                </div>
                    <h1>Live Kill Feed</h1><table id="livekillscontainer">
                        {getKillData && getKillData.map((event) => {
                            return (
                                <tr>
                                    {renderKillFeed(event)}
                                </tr>
                            );
                        })}
                    </table>

                    <h1>Teams Information</h1><table id="livekillscontainer">
                        {getTeamsData && getTeamsData.map((team) => {
                            return (
                                <tr>
                                    <td>
                                        <h3><img src={"https://minotar.net/avatar/" + team.team_name + "/35"} alt="Avatar 35x35"></img></h3>
                                    </td>
                                    <td>
                                        <h3>{team.team_name} Team</h3>
                                    </td>
                                    <td>
                                        <h3>Members:</h3>
                                        {team.team_member && team.team_member.split(",").map((member) => {
                                            return (
                                                <h4>{member}</h4>
                                            );
                                        })}
                                    </td>
                                </tr>
                            );
                        })}
                    </table></>
            }
            {getError && <h1 id="errormessage">Error: {getError}</h1>}
        </div >
    );
}

function renderKillFeed(event) {
    if (event.killer_name !== "") {
        return (
            <tr>
                <td>
                    <h3><img src={"https://minotar.net/avatar/" + event.player_name + "/35"} alt="Avatar 35x35"></img></h3>
                </td>
                <td>
                    <h3>{event.player_name + " has been killed by " + event.killer_name}</h3>
                </td>
            </tr>
        )
    } else {
        return (
            <tr>
                <td>
                    <h3><img src={"https://minotar.net/avatar/" + event.player_name + "/35"} alt="Avatar 35x35"></img></h3>
                </td>
                <td>
                    <h3>{event.player_name + " has been killed mysteriously"}</h3>
                </td>
            </tr>
        )
    }
}

function getGameTimeFormatted(gameTime) {
    let second = gameTime % 60;
    let minute = gameTime / 60;
    if (minute >= 60) {
        let hour = minute / 60;
        minute %= 60;
        return Math.floor(hour).toFixed(0) + ":" + Math.floor(minute).toFixed(0) < 10 ? "0" + Math.floor(minute).toFixed(0) : Math.floor(minute).toFixed(0) + ":" + (Math.floor(second).toFixed(0) < 10 ? "0" + Math.floor(second).toFixed(0) : Math.floor(second).toFixed(0));
    }
    return Math.floor(minute).toFixed(0) + ":" + (Math.floor(second).toFixed(0) < 10 ? "0" + Math.floor(second).toFixed(0) : Math.floor(second).toFixed(0));
}

export default GameInfo;