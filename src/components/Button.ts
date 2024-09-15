import styled, { css } from "styled-components";

interface Props{
    size?: number;
    txtcolor?: string;
    btncolor?: string;
    fill?: boolean;
}
const shareStyle = css`
    margin: 1rem;
    padding: 0.5rem 1rem;
    font-weight: 700;
    transition: all 0.3s;
    &:hover{
    scale: 0.9;
}
`;
export const Button = styled.button<Props>`
    ${shareStyle}
    font-size: ${(props)=>props.size + "rem" || "1rem"};
    color: ${(props)=>props.txtcolor || "white"};
    background: ${(props)=>props.fill? props.btncolor : "transparent"};
    border-radius: 1rem;
    border: ${(props)=> !props.fill ? "solid 2px "+props.btncolor : "none"};
    &:hover{
    scale: 0.9;
    box-shadow: 2px 2px 10px ${props=>props.btncolor}
    }
`;
export const StartButton = styled.button<Props>`
${shareStyle}
font-size: ${(props)=>props.size + "rem" || "1rem"};
    color: ${(props)=>props.txtcolor || "white"};
    background: ${(props)=>props.fill? props.btncolor : "transparent"};
    border-radius: 1rem;
    border: ${(props)=> !props.fill ? "solid 2px "+props.btncolor : "none"};
    &:hover{
    scale: 0.9;
    box-shadow: 2px 2px 10px ${props=>props.btncolor}
    }
@media(max-width: 550px){
position: absolute;
bottom: 3rem;
}
`;