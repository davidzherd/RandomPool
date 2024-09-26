import { useState, createContext } from 'react';
import './global.css';
import GameSettings from './pages/GameSettings';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const PlayersContext = createContext({playersData:[], updatePlayersData:(_e: [])=>{}});
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
        </Routes>
      </BrowserRouter>
    </PlayersContext.Provider>
  )
}

export default App
