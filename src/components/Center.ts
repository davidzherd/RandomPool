import styled from "styled-components";

interface Props{
    direction: string;
}
export const Center = styled.div<Props>`
display: flex;
flex-direction: ${props=>props.direction};
align-items: center;
justify-content: center;
`;