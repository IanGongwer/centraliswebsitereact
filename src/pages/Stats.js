import React, { useEffect, useState } from "react";
import "../App.css";

const Stats = () => {
    const [getData, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/players")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div className="Stats">
            <h1>TOP 10 ALL-TIME PLAYERS</h1>
            <table id="statscontainer">
                <tr>
                    <th>Icon</th>
                    <th>User</th>
                    <th>Wins</th>
                    <th>Kills</th>
                    <th>Deaths</th>
                </tr>
                {
                    getData.map((player) => {
                        return (
                            <tr>
                                <td>
                                    <img src={"https://minotar.net/avatar/" + player.player_name + "/35"} alt="Avatar 35x35"></img>
                                </td>
                                <td>
                                    <h3>{player.player_name}</h3>
                                </td>
                                <td>
                                    <h3>{player.game_wins}</h3>
                                </td>
                                <td>
                                    <h3>{player.player_kills}</h3>
                                </td>
                                <td>
                                    <h3>{player.player_deaths}</h3>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </div >
    );
}

export default Stats;