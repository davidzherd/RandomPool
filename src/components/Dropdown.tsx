import {  useState } from "react"
import { DropdownButton } from "./Input"
import styled from "styled-components"

const StyledDrop =styled.div<{ length: number }>`
    width: 3rem;
    border-radius: 0 0 12px 12px;
    background: #333;
    border: none;
    outline: none;
    box-shadow: 2px 2px 5px black;
    height: auto;
    padding: 0.2rem;
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom:-${(props)=>(props.length * 1.2).toString()+" rem"};
    z-index: 10;
    .option{
        font-weight: 500;
        padding: 0.2rem;
        cursor: pointer;

    }
    .option:hover{
        background: #5c5c5c;
        border-radius: 8px;
    }
`;
interface Props{
    menuItems: number[];
    selected: number;
    action: Function;
}
export const Dropdown = ({ menuItems, selected, action}:Props)=>{
    const [open, setOpen] = useState(false)
    const handleSelection = (number:number)=>{
        action(number)
        setOpen(false)
    }
    return(
        <div style={{position: "relative"}}>
        <DropdownButton onClick={()=>setOpen((prev)=> {return !prev})}>
            {selected}
            <svg fill="#000000" width="20px" height="20px" viewBox="-6.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z"></path>
            </svg>
        </DropdownButton>
        {open && <StyledDrop length={menuItems.length}>
            {menuItems.map((item:any,index: number)=><div className="option" key={index} onClick={()=>handleSelection(item)}>{item}</div>)}
        </StyledDrop>}
        </div>
    )
}