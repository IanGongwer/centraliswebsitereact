import { Link } from "react-router-dom";
import "../App.css";

const NavBar = () => {
   const navbarItems = [
      { text: 'Announcements', link: '/' },
      { text: 'DevLog', link: '/devlog' },
      { text: 'Stats', link: '/stats' },
      { text: 'Scenarios', link: '/scenarios' },
      { text: 'Recipes', link: '/recipes' },
      { text: 'Game Info', link: '/gameinfo' },
      { text: 'Discord', link: 'http://discord.centralis.cc/' },
   ];

   return (
      <><nav id="navbar">
         <ul id="navbarlist">
            {navbarItems.map((item, index) => (
               <li key={index} id="navbaritem">
                  <Link to={item.link} id="navbaritemlink">{item.text}</Link>
               </li>
            ))}
         </ul>
      </nav><section id="banner">
            <img src={require("../images/Lobby.png")} alt="" />
            <div id="imagetext">
               <div>Centralis Network</div>
               <div>Your Home for Competitive UHC Games</div>
            </div>
            <div id="imageip">UHC.CENTRALIS.CC | ✂</div>
         </section></>
   );
};

export default NavBar;