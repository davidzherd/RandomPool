import { useContext, useEffect, useState } from "react"
import { Center } from "../components/Center"
import { Text } from "../components/Text"
import { PlayersContext } from "../App"
import { PlayerTag } from "../components/PlayerTag"
import { User } from "../logic"
import { Ball } from "../components/Ball"
import { PopUp } from "../components/PopUp"
import { Card } from "../components/Card"
import { Log } from "../components/Log"
import { WinnerPopUp } from "../components/WinnerPopUp"

const Game = ()=> {
  const playerCtx = useContext(PlayersContext)
  const [availableBalls,setAvailableBalls] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
  const [pottedBalls, setPottedBalls] = useState<string[]>([])
  const [displayPopUp, setDisplayPopUp] = useState(-1000)
  const [displayWinner, setDisplayWinner] = useState(-1000)
  const [selectedPlayer, setSelectedPlayer] = useState(0)

  useEffect(()=>{
    playerCtx.playersData.length <= 1 && setDisplayWinner(0)
  },[playerCtx.playersData.length])

  const handleBallPot = (identifier:number)=>{
    const leftOverBalls = availableBalls.filter(ball=> ball !== identifier)
    setAvailableBalls(leftOverBalls)
    setPottedBalls((potted)=>[...potted, `Ball number ${identifier} potted!`])
    removeBallFromUser(playerCtx.playersData, identifier)
  }

  function removeBallFromUser(playersData: User[], ballNumber: number): boolean {
    for (const player of playersData) {
        const ballIndex = player.balls.indexOf(ballNumber);
        if (ballIndex !== -1) {
            player.balls.splice(ballIndex, 1);
            if(player.balls.length === 0){
              playersData.splice(playersData.indexOf(player),1)
              setPottedBalls((potted)=>[...potted, `${player.name} was eliminated!`])
            }
            playerCtx.updatePlayersData(playersData)
        }
    }
    return false;
  }

  const handlePopUp = (playerId:number)=>{
    setSelectedPlayer(playerId)
      if (displayPopUp === -1000){
          setDisplayPopUp(0)
      }else{
          setDisplayPopUp(-1000)
      }
  }
  const handleWinner = ()=>{
    setDisplayWinner(-1000)
    setAvailableBalls([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
    setPottedBalls([])
  }

  return (
    <div style={{overflow:"hidden"}}>
      <WinnerPopUp bottom={displayWinner} action={handleWinner}/>
      <PopUp bottom={displayPopUp} action={()=>handlePopUp(selectedPlayer)} selectedPlayer={selectedPlayer}/>
      <Center direction='column'>
        <Center background="#474747" direction="column" className="header">
            <Text shadowcolor="#ed428e" size={2} weight="400" margin="1rem">
              Players
            </Text>
            <Center direction="row">
            {playerCtx.playersData.length > 0 && playerCtx.playersData.map((player: User,index)=><Center direction="column" key={index+"user"}><PlayerTag background={player.color} onClick={()=>handlePopUp(player.id)}><div style={{width:"25px", height:"25px", background:"white", borderRadius:"50%", display:"flex", justifyContent:"center", alignItems:"center", fontWeight:"500"
            }}>{player.tag}</div></PlayerTag><Text weight="300" size={0.8}>{player.name.toUpperCase()}</Text></Center>)}
            </Center>
            </Center>
            <Text  size={1.5} weight="400" margin="1rem">
              Available balls on the table
            </Text>
            <div style={{display:"grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", gap: "0.5rem"}}>
            {availableBalls.length != 0 && availableBalls.map(ball=><Ball txtSize="1rem" action={()=>handleBallPot(ball)} key={ball+"ball"} ballNumber = {ball} ballSize={50}/>)}
            </div>
            <Text size={1} weight="500" margin="1rem" shadowcolor="#151515">Click on a ball to eliminate it!</Text>
            <Card width="90%" height={(window.innerHeight * 0.3).toString()+"px"} margin="1rem" padding="1rem">
              <Log ballsArray={[...pottedBalls].reverse()} height={(window.innerHeight * 0.25).toString()+"px"} width={(window.innerWidth * 0.8).toString()+"px"}>
              </Log>
            </Card>
      </Center>
    </div>
  )
}

export default Game
