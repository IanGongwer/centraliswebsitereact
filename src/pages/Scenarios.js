import "../App.css";

const Scenarios = () => {

    return (
        <div className="Scenarios">
            <h1>SCENARIOS</h1>
            <div id="maincontainer">
                <h2>Active Scenarios (As of 8/2/2022)</h2>
                <p>
                    <ul>
                        <li>Bowless</li>
                        <p>Bows are disabled! You cannot craft, use, nor obtain bows!</p>
                        <li>CutClean</li>
                        <p>All ores and animal food will be dropped in it's smelted version.</p>
                        <li>BloodDiamonds</li>
                        <p>Every time you mine a diamond ore, you will lose half a heart.</p>
                        <li>HasteyBoys</li>
                        <p>Every tool that you craft will have Efficiency 3 and Unbreaking 1.</p>
                        <li>Timber</li>
                        <p>When you break a tree, the entire logs of that tree will come off.</p>
                        <li>TimeBomb</li>
                        <p>Whenever a player dies, their stuff will be placed in a chest with a timer ticking. Players will have
                            30 seconds to grab the stuff before it explodes. After the 30 seconds, the chest full of items will
                            explode. Players can be damaged by the explosion.</p>
                        <li>Fireless</li>
                        <p>All Fire damage (Includes lava and fire swords), will not do damage to you.</p>
                        <li>SupplyDrops</li>
                        <p>A singular chest spawns at a random location when the game-time hits 10, 15, 30, 35, and 40 minutes.</p>
                    </ul>
                </p>
                <p><i>Please message in the #suggestions chat via the Discord, if you have a scenario/feature idea</i></p>
            </div>
        </div >
    );
}

export default Scenarios;