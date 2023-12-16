import "../App.css";

const DevLog = () => {

  return (
    <div className="DevLog">
      <h1>DEVELOPMENT LOG</h1>
      <div id="maincontainer">
        <h2>Development Log #2 (8/2-3/2022)</h2>
        <p>
          <ul>
            <li>Updated Stats page to return sorted leaderboard based on player wins, then player kills</li>
            <li>Changed lobby and practice maps</li>
            <li>Added TimeBomb scenario</li>
            <li>Bug-Tested UHC gamemode in general</li>
            <li>Sheep only drop 1 string on kill now</li>
            <li>UHC border size is now 1500x1500</li>
            <li>Removed Hologram leaderboard and put stats webpage link in stats command</li>
          </ul>
        </p>
        <p><i>Please submit a HelpDesk ticket via the Discord, if you need assistance</i></p>
      </div>
      <div id="maincontainer">
        <h2>Development Log #1 (8/1/2022)</h2>
        <p>
          <ul>
            <li>Created initial webpage for CentralisCC (WIP)</li>
          </ul>
        </p>
        <p><i>Please submit a HelpDesk ticket via the Discord, if you need assistance</i></p>
      </div>
    </div >
  );
}

export default DevLog;