import { Text } from "./Text";


interface Props{
    ballsArray: string[];
    height: string;
    width: string;
}
export const Log = ({ ballsArray, height,width }:Props)=>{
    return(
        <div style={{height: height, overflowY:"scroll", width: width}}>
            {ballsArray.map((pot, index)=><Text key={index+"log"} size={1.2} opacity={index<8?(1- index*0.1): 0.2} margin="0.2rem">{pot}</Text>)}
        </div>
    )
}