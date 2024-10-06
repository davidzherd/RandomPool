import { useState, createContext } from 'react';
import './global.css';
import GameSettings from './pages/GameSettings';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Game from './pages/Game';
import { User } from './logic';

interface Context{
  playersData: User[] | [];
  updatePlayersData: Function;
  initialPlayersData: Settings;
  updateInitialPlayersData:Function;
}
interface Settings{
  players: User[] | [];
  balls: number;
}
export const PlayersContext = createContext<Context>({playersData:[], updatePlayersData:(_e: [])=>{}, initialPlayersData: {players:[], balls:0}, updateInitialPlayersData:(_e: [])=>{}});

function App() {

  const [playersData,setPlayersData] = useState([])
  const [initialPlayersData,setInitialPlayersData] = useState<Settings>({players:[], balls:0})

  const handleDataUpadate = (data:[])=>{
    setPlayersData(data)
  }
  const handleInitialDataUpadate = (data:Settings)=>{
    setInitialPlayersData(data)
  }
  return (
    <PlayersContext.Provider value={{playersData: playersData, updatePlayersData: handleDataUpadate, initialPlayersData: initialPlayersData, updateInitialPlayersData: handleInitialDataUpadate}} >
      <BrowserRouter>
        <Routes>
          <Route path='/randompool/' element={<Home/>}  />
          <Route path='/randompool/new' element={<GameSettings/>}  />
          <Route path='/randompool/game' element={<Game/>}  />
        </Routes>
      </BrowserRouter>
    </PlayersContext.Provider>
  )
}

export default App
