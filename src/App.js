import {
  Route,
  Routes
} from "react-router-dom";

import Announcements from './pages/Announcements';
import DevLog from './pages/DevLog';
import NavBar from './pages/NavBar';
import Stats from './pages/Stats';
import Scenarios from './pages/Scenarios';
import Recipes from './pages/Recipes';
import GameInfo from './pages/GameInfo';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Announcements />} />
        <Route path="/devlog" element={<DevLog />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/scenarios" element={<Scenarios />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/gameinfo" element={<GameInfo />} />
      </Routes>
    </>
  );
}

export default App;