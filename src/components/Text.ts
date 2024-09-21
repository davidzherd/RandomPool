import styled from "styled-components";

interface Props{
    size?: number;
    weight?: string;
    color?: string;
    shadowcolor?: string;
    margin?:string;
    padding?:string;
}
export const Text = styled.p<Props>`
    font-size: ${(props)=>props.size + "rem" || "1rem"};
    font-weight: ${(props)=>props.weight?? "400"};
    color: ${(props)=>props.color || "white"};
    text-shadow: ${props => props.shadowcolor + " 1px 1px 4px" ?? "none"};
    margin: ${props => props.margin ?? "none"};
    padding: ${props => props.padding ?? "none"};
`;