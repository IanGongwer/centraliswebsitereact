import React, { useEffect, useState } from "react";
import "../App.css";

const GameInfo = () => {
    const [getData, setData] = useState([0]);
    // const [getKillData, setKillData] = useState([0]);

    useEffect(() => {
        fetch("http://localhost:3001/gameinformation")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    // useEffect(() => {
    //     fetch("http://localhost:3001/killfeed")
    //         .then((res) => res.json())
    //         .then((data) => setKillData(data));
    // }, []);

    return (
        <div className="GameInfo">
            <h1>Current Game Information</h1>
            <div id="gameinfocontainer">
                <h2>Players Left: {getData[0].players_left}</h2>
                <h2>Border Size: {getData[0].border_size}</h2>
                <h2>Game Time: {getGameTimeFormatted(getData[0].game_time)}</h2>
                <h2>Game State: {getData[0].game_state}</h2>
            </div>
            <h1>Live Kill Feed</h1>
            {/* <table id="livekillscontainer">
                {
                    getKillData.map((event) => {
                        return (
                            <tr>
                                {renderKillFeed(event)}
                            </tr>
                        )
                    })
                }
            </table> */}
        </div >
    );
}

// function renderKillFeed(event) {
//     if (event.killer_name != "") {
//         <td>
//             <h3><img src={"https://minotar.net/avatar/" + event.player_name + "/35"} alt="Avatar 35x35"></img>{event.player_name + " has been killed by " + event.killer_name}</h3>
//         </td>
//     } else {
//         <td>
//             <h3>{event.player_name + " has been killed mysteriously"}</h3>
//         </td>

//     }
// }

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