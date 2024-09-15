import styled from "styled-components";

interface Props{
    size?: number;
    weight?: number;
    color?: string;
    shadow?: boolean;
    shadowcolor?: string;
}
export const Text = styled.p<Props>`
    font-size: ${(props)=>props.size + "rem" || "1rem"};
    font-weight: ${(props)=>props.weight + "rem" || "400"};
    color: ${(props)=>props.color || "white"};
    text-shadow: ${props => props.shadow? "1px 1px 4px " + props.shadowcolor : "none"}
`;