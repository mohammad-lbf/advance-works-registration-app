import React , {useState} from 'react';
import styled from 'styled-components';
import HambergurMenu from './HambergurMenu';

const Div = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
position:fixed;
top:22px;
right:30px;
width:1.5rem;
height:1.5rem;
cursor:pointer;
z-index:110;
@media (min-width:1200px){
    display:none;
}
div{
    transition: all 0.3s linear;
    width:1.5rem;
    height:0.2rem;
    background-color: #0d6efd ;
    border-radius:5px;
    transform-origin:1px;
    &:nth-child(1){
        transform:${props => props.open ? "rotate(45deg)" : "rotate(0)"};
    }
    &:nth-child(2){
        transform:${props => props.open ? "translateX(-100%)" : "translateX(0)"};
        opacity: ${props => props.open ? "0" : "1"};
    }
    &:nth-child(3){
        transform:${props => props.open ? "rotate(-45deg)" : "rotate(0)"};

    }
}
`
const HambergurMenuOpener = (props) => {
    
    // 
    const clickHandler = () =>{
        props.setOpen(prevOpen => !prevOpen)
    }
    return (
        <>
        <Div open={props.open} onClick={clickHandler}>
            <div></div>
            <div></div>
            <div></div>
        </Div>
        <HambergurMenu open={props.open} darkmode={props.darkmode} />
        </>
    );
};

export default HambergurMenuOpener;