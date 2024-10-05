import styled from "styled-components"
import { Text } from "./Text";
import { ActionType, Ball } from "./Ball";
import { IoClose } from "react-icons/io5";
import { Input } from "./Input";
import { useContext, useState } from "react";
import { Button } from "./Button";
import { PlayersContext } from "../App";

interface Props{
    bottom: number;
    action: ActionType;
    selectedPlayer: number;
}
export const StyledPopUp = styled.div<{ bottom:number}>`
width: ${props=> props.bottom === 0 ? "100%" : "0"};
height: ${props=> props.bottom === 0 ? "100%" : "0"};
background: #333;
display: flex;
position: absolute;
bottom: ${props=> props.bottom}px;
transition: ease-in 0.2s bottom;
z-index: 100;
overflow:hidden;
.wrapper{
    display: ${props=> props.bottom === 0 ? "flex" : "none"};
    flex-direction: column;
    width: 100%;
    padding: 1rem;
    gap: 1rem;
    align-items: center;
    transition: ease-in 0.2s;
    overflow: hidden;
}
`;

export const PopUp = ({ bottom, action, selectedPlayer}:Props) =>{
    const userCtx = useContext(PlayersContext)
    const [password, setPassword] = useState("")
    const [balls, setBalls] = useState<number[]>([])
    const [error, setError] = useState<string>("")

    const verifyUserPassword = ()=>{
        for (let i = 0; i < userCtx.playersData.length; i++) {
           if (userCtx.playersData[i].id === selectedPlayer && userCtx.playersData[i].password === password){
            showBalls(userCtx.playersData[i].balls)
            return
           }else{
            setError("This password is incorrect!");
        } 
        }
    }
    const showBalls=(balls:number[])=>{
        setBalls(balls)
        setError("")
    }
    const close = ()=>{
        setPassword("")
        setBalls([])
        setError("")
        action()
    }
    return(
        <StyledPopUp bottom={bottom}>
            <div className="wrapper">
                <IoClose size={40} color="white" style={{alignSelf:"end"}} onClick={close}/>
                <Text size={1.5} weight="500">Enter your password:</Text>
                <Input width="80%" type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                <Button txtcolor="#ed428e" btncolor="#ed428e" size={1.5} onClick={verifyUserPassword}>SHOW</Button>
                <Text size={1.5} weight="500">Your balls are:</Text>
                {balls.length != 0 && balls.map(ball=><Ball txtSize="2rem" key={ball+"ball"} ballNumber = {ball} ballSize={100}/>)}
                {error&& <Text style={{color:"red"}}>{error}</Text>}
            </div>
        </StyledPopUp>
    )
}