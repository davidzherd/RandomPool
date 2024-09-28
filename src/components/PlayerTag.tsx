import styled from "styled-components";

interface Props{
    margin?: string;
    background: string;
}
export const PlayerTag = styled.div<Props>`
    width: 50px;
    height: 50px;
    margin: ${(props)=>props.margin ?? "0.25rem"};
    box-shadow: black 2px 2px 5px;
    border-radius: 50%;
    display:flex;
    align-items: center;
    justify-content:center;
    font-weight: 500;
    background: ${props=>props.background};
`;