import React from "react";
import Game from "./components/game/Game";

import "./App.css";
import RaccoonPic from "./assets/images/raccoon2.png";
import SquirrelPic from "./assets/images/squirrel.png";
import BunnyPic from "./assets/images/bunny.png";
import HoundPic from "./assets/images/hound.png";

function App() {
  const raccoons = {
    name: "Russiaville Raccoons",
    logoSrc: RaccoonPic,
  };

  const squirrels = {
    name: "Sheridan Squirrels",
    logoSrc: SquirrelPic,
  };

  const bunnies = {
    name: "Burlington Bunnies",
    logoSrc: BunnyPic,
  };

  const hounds = {
    name: "Hammond Hounds",
    logoSrc: HoundPic,
  };

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game venue="Sheridan Arena" homeTeam={bunnies} visitingTeam={hounds} />
    </div>
  );
}

export default App;
