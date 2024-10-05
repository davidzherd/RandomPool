import { Text } from "./Text";
import { useContext } from "react";
import { Button } from "./Button";
import { PlayersContext } from "../App";
import { StyledPopUp } from "./PopUp";
import { Center } from "./Center";
import { PlayerTag } from "./PlayerTag";
import Crown from "./Crown";
import { Link } from "react-router-dom";
import { distributeBalls } from "../logic";

interface Props{
    bottom: number;
    action: Function;
}

export const WinnerPopUp = ({ bottom, action }:Props) =>{
    const userCtx = useContext(PlayersContext)

    const handleNewRound = ()=>{
        console.log(userCtx.initialPlayersData)
        const newBalls = distributeBalls([...userCtx.initialPlayersData.players], userCtx.initialPlayersData.balls)
        userCtx.updatePlayersData([...newBalls])
        action()
    }

    return(
        <StyledPopUp bottom={bottom}>
            <div className="wrapper">
                <Text size={2} weight="500" shadowcolor="#DAA520">Congratulations!</Text>
                <Text size={1.5} weight="500" shadowcolor="#DAA520">{userCtx.playersData[0].name} is the winner</Text>
                <Center direction="column" margin="1rem">
                    <div style={{zIndex: "2", marginBlock:"1rem"}}>
                    <Crown/>
                    </div>
                    <PlayerTag style={{scale: "4"}} background={userCtx.playersData[0].color}>
                        <div style={{width:"25px", height:"25px", background:"white", borderRadius:"50%", display:"flex", justifyContent:"center", alignItems:"center", fontWeight:"500"
                        }}>{userCtx.playersData[0].tag}
                        </div>
                    </PlayerTag>
                    <Center direction="column" margin="5rem 0 0 0">
                        <Button margin="5rem 0" padding="1rem 2rem" btncolor="#DAA520" fill onClick={handleNewRound}>START NEW ROUND</Button>
                        <Link to="/new">
                            <Button btncolor="gray" txtcolor="gray">GAME SETTINGS</Button>
                        </Link>
                    </Center>
                </Center>   
            </div>
        </StyledPopUp>
    )
}