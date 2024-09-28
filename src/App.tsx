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
}
export const PlayersContext = createContext<Context>({playersData:[], updatePlayersData:(_e: [])=>{}});

function App() {

  const [playersData,setPlayersData] = useState([])
  const handleDataUpadate = (data:[])=>{
    setPlayersData(data)
    console.log(data)
  }

  return (
    <PlayersContext.Provider value={{playersData: playersData, updatePlayersData: handleDataUpadate}} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/new' element={<GameSettings updatePlayers={handleDataUpadate}/>}  />
          <Route path='/game' element={<Game/>}  />
        </Routes>
      </BrowserRouter>
    </PlayersContext.Provider>
  )
}

export default App
