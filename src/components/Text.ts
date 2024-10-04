import styled from "styled-components";

interface Props{
    size?: number;
    weight?: string;
    color?: string;
    shadowcolor?: string;
    margin?:string;
    padding?:string;
    opacity?: number;
}
export const Text = styled.p<Props>`
    font-size: ${(props)=>props.size + "rem" || "1rem"};
    font-weight: ${(props)=>props.weight?? "400"};
    color: ${(props)=>props.color || "white"};
    text-shadow: ${props => props.shadowcolor + " 1px 1px 4px"};
    margin: ${props => props.margin ?? "0"};
    padding: ${props => props.padding ?? "0"};
    opacity: ${props => props.opacity?.toString() ?? "1"};
`;