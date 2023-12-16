import "../App.css";

const Recipes = () => {

    return (
        <div className="Recipes">
            <h1>RECIPES</h1>
            <div id="maincontainer">
                <h2>Novice Sword Recipe</h2>
                <img src={require("../images/NoviceSwordRecipe.PNG")} alt="Novice Sword Recipe In-Game" />
            </div>
            <div id="maincontainer">
                <h2>Legend Sword Recipe</h2>
                <img src={require("../images/LegendRecipe.PNG")} alt="Legend Sword Recipe In-Game" />
            </div>
            <div id="maincontainer">
                <h2>String Recipe</h2>
                <img src={require("../images/StringCraftRecipe.PNG")} alt="String Recipe In-Game" />
            </div>
            <div id="maincontainer">
                <h2>Gold Recipe</h2>
                <img src={require("../images/GoldCraft.PNG")} alt="Gold Craft Recipe In-Game" />
            </div>
        </div >
    );
}

export default Recipes;