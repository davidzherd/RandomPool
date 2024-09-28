export type ActionType = () => void;
interface Props{
  ballNumber: number;
  ballSize: number;
  action?: ActionType;
}
export const Ball = ({ ballNumber, ballSize, action }:Props) =>{
  const ballColor = ()=>{
    switch(ballNumber){
      case 1:
        return "#f3c900";
      case 2:
        return "#13529c";
      case 3:
        return "#9c1713";
      case 4:
        return "#4d139c";
      case 5:
        return "#fd6e26";
      case 6:
        return "#0b430a";
      case 7:
        return "#30110b";
      case 8:
        return "#151515";
      case 9:
        return "#f3c900";
      case 10:
        return "#13529c";
      case 11:
        return "#9c1713";
      case 12:
        return "#4d139c";
      case 13:
        return "#fd6e26";
      case 14:
        return "#0b430a";
      case 15:
        return "#30110b";
  }
}

  const color = ballColor()
  if (ballNumber < 8){
    return(
      <div onClick={action} className="ballShadow" style={{background: `${color}`, width:`${ballSize+"px"}`, height: `${ballSize+"px"}`, borderRadius: "50%", display:"flex", alignItems:"center", justifyContent: "center", margin:"0.25rem"}}>
        <div style={{background: `white`, width:`${ballSize/2+"px"}`, height: `${ballSize/2+"px"}`, borderRadius: "50%", display:"flex", alignItems:"center", justifyContent: "center", fontWeight: "500"}}>
          {ballNumber}
        </div>
      </div>
    )
  }else if(ballNumber === 8){
    return(
      <div onClick={action} className="ballShadow" style={{background: `${color}`, width:`${ballSize+"px"}`, height: `${ballSize+"px"}`, borderRadius: "50%", display:"flex", alignItems:"center", justifyContent: "center", margin:"0.25rem"}}>
        <div style={{background: `white`, width:`${ballSize/2+"px"}`, height: `${ballSize/2+"px"}`, borderRadius: "50%", display:"flex", alignItems:"center", justifyContent: "center", fontWeight: "500"}}>
          {ballNumber}
        </div>
      </div>
    )
  }else{
    return(
      <div onClick={action} className="ballShadow" style={{background: "white", width:`${ballSize+"px"}`, height: `${ballSize+"px"}`, borderRadius: "50%", display:"flex", alignItems:"center", justifyContent: "center", margin:"0.25rem"}}>
        <div style={{background: `${color}`, width:`${ballSize+"px"}`, height: `${ballSize*0.60 +"px"}`, borderRadius: "27%", display:"flex", alignItems:"center", justifyContent: "center", overflow:"hidden"}}>
          <div style={{background: `white`, width:`${ballSize/2+"px"}`, height: `${ballSize/2+"px"}`, borderRadius: "50%", display:"flex", alignItems:"center", justifyContent: "center", fontWeight: "500"}}>
            {ballNumber}
          </div>
        </div>
      </div>
    )
  }
}