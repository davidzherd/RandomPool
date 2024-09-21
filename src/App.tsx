import { useState } from 'react';
import './global.css';
import GameSettings from './pages/GameSettings';
interface Player{
  playerName: string;
  playerBalls: number[];
}
import Home from './pages/Home';
function App() {
  const [gameSettings, setGameSettings] = useState({numOfPlayers:2, players:[]});
  return (
    // <Home/>
    <GameSettings/>
  )
}

export default App
