import { useContext, useState } from "react"
import { Center } from "../components/Center"
import { Text } from "../components/Text"
import { PlayersContext } from "../App"
import { PlayerTag } from "../components/PlayerTag"
import { User } from "../logic"
import { Ball } from "../components/Ball"
import { PopUp } from "../components/PopUp"

const Game = ()=> {
    const playerCtx = useContext(PlayersContext)
    const [availableBalls,setAvailableBalls] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])

    const handleBallPot = (identifier:number)=>{
      const leftOverBalls = availableBalls.filter(ball=> ball !== identifier)
      setAvailableBalls(leftOverBalls)
    }
    const [displayPopUp, setDisplayPopUp] = useState({display: "none", bottom: -1000})
    const handlePopUp = ()=>{
        if (displayPopUp.display === "none"){
            setDisplayPopUp({display: "flex", bottom: 0})
        }else{
            setDisplayPopUp({display: "none", bottom: -1000})
        }
    }

  return (
    <>
    <PopUp display={displayPopUp.display} bottom={displayPopUp.bottom} action={handlePopUp}/>
    <Center direction='column'>
      <Center background="#474747" direction="column" className="header">
          <Text shadowcolor="#ed428e" size={2} weight="400" margin="1rem">
            Players
          </Text>
          <Center direction="row">
          {playerCtx.playersData.length > 0 && playerCtx.playersData.map((player: User,index)=> <Center direction="column" key={index+"user"}><PlayerTag background={player.color} onClick={handlePopUp}><div style={{width:"25px", height:"25px", background:"white", borderRadius:"50%", display:"flex", justifyContent:"center", alignItems:"center", fontWeight:"500"
          }}>{player.tag}</div></PlayerTag><Text weight="300" size={0.8}>{player.name.toUpperCase()}</Text></Center>)}
          </Center>
          </Center>
          <Text  size={1.5} weight="400" margin="1rem">
            Available balls on the table
          </Text>
          <div style={{display:"grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", gap: "0.5rem"}}>
          {availableBalls.length != 0 && availableBalls.map(ball=><Ball action={()=>handleBallPot(ball)} key={ball+"ball"} ballNumber = {ball} ballSize={50}/>)}
          </div>
          <Text size={1} weight="500" margin="1rem" shadowcolor="#151515">Click on a ball to eliminate it!</Text>
    </Center>
    </>
  )
}

export default Game
