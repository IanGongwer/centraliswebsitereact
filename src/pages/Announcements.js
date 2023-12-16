import "../App.css";

const Announcements = () => {

    return (
        <div className="Announcements">
            <h1>ANNOUNCEMENTS</h1>
            <div id="maincontainer">
                <h2>Pertinent Information</h2>
                <img src={require("../images/announcement-1.jpg")} alt="CentralisCC Hub" />
                <p>Greetings Contenders,</p>
                <p>Welcome to the very first announcement on the CentralisCC webpage. You can utilize the above tabs to take
                    a
                    look at the updated announcements, latest development updates, and all-time leaderboard. Also, be sure
                    to
                    join the discord using the above link to talk with fellow contenders, submit a ticket, and get involved
                    with
                    the community.</p>
                <p><i>I look forward to seeing you on the battlefield.</i></p>
                <p><i>- Centralis</i></p>
            </div>
        </div >
    );
}

export default Announcements;