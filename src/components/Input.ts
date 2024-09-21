import styled from "styled-components";

interface Props{
    width: string;
    color?: string;
    shadowcolor?: string;
    type?: string;
}
export const Input = styled.input<Props>`
    width: ${(props)=>props.width};
    border-radius: 12px;
    background: #333;
    border: none;
    outline: none;
    box-shadow: 2px 2px 5px black;
    height: 2rem;
    padding: 0.3rem;
    color: ${(props)=>props.color ?? "black"};
    text-shadow: ${(props)=>props.shadowcolor + " 2px 2px 3px" ?? "none"};
`;
export const DropdownButton = styled.div`
    width: 3rem;
    border-radius: 12px 12px 0 0 ;
    background: #333;
    border: none;
    outline: none;
    box-shadow: 2px 2px 5px black;
    height: 2rem;
    padding: 0.2rem;
    cursor:pointer;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-weight: 500;

`;
