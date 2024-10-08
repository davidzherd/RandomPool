import styled from "styled-components";

interface Props{
    direction: string;
    background?: string;
    margin?: string;
}
export const Center = styled.div<Props>`
display: flex;
flex-direction: ${props=>props.direction};
align-items: center;
justify-content: center;
background: ${props=>props.background ?? "transparent"};
margin: ${props=>props.margin ?? "0"};

`;