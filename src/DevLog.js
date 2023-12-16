import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom"

function DevLog() {
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

    </div >
  );
}

export default DevLog