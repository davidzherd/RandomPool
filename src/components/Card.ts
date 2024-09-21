import styled from "styled-components";

interface Props{
    width: string;
    height?: string;
    margin?: string;
    padding?: string;
    direction?: string;
}
export const Card = styled.div<Props>`
    width: ${(props)=>props.width};
    height: ${(props)=>props.height ?? "auto"};
    margin: ${(props)=>props.margin ?? "0"};
    padding: ${(props)=>props.padding ?? "0"};
    box-shadow: black 2px 2px 5px;
    border-radius: 12px;
    display:flex;
    flex-direction: ${(props)=>props.direction ?? "row"};
    gap: 0.5rem;
`;