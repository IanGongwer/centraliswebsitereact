import React, { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom"

function App() {
  const [message, setMessage] = useState([]);
  const navbarItems = [
    { text: 'Announcements', link: 'index.html' },
    { text: 'DevLog', link: '/DevLog' },
    { text: 'Stats', link: '/App' },
    { text: 'Scenarios', link: 'scenarios.html' },
    { text: 'Recipes', link: 'recipes.html' },
    { text: 'Game Info', link: 'gameinfo.html' },
    { text: 'Discord', link: 'http://discord.centralis.cc/' },
  ];

  useEffect(() => {
    fetch("http://localhost:3001/apiData")
      .then((res) => res.json())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div className="App">

      <nav id="navbar">
        <ul id="navbarlist">
          {navbarItems.map((item, index) => (
            <li key={index} id="navbaritem">
              <Link to={item.link} id="navbaritemlink">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <section id="banner">
        <img src={require("./images/Lobby.png")} alt="" />
        <div id="imagetext">
          <div>Centralis Network</div>
          <div>Your Home for Competitive UHC Games</div>
        </div>
        <div id="imageip">UHC.CENTRALIS.CC | ✂</div>
      </section>

      <main>
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
            message.map((player) => {
              return (
                <tr>
                  <td>
                    <img src={"https://minotar.net/avatar/" + player.name + "/35"}></img>
                  </td>
                  <td>
                    <h3>{player.name}</h3>
                  </td>
                  <td>
                    <h3>{player.wins}</h3>
                  </td>
                  <td>
                    <h3>{player.kills}</h3>
                  </td>
                  <td>
                    <h3>{player.deaths}</h3>
                  </td>
                </tr>
              )
            })
          }
        </table>
      </main>

    </div >
  );
}

export default App