import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
const Div = styled.div`
width:100vw;
height: 100vh;
background-color: rgba(0,0,0,0.7);
display: ${props => props.modal ? "block" : "none"} ;
position:fixed;
top:0;
right:0;
transition: all 0.4s;
z-index:100;
@media (min-width:768px){
    display:none;
}
`
const HambergurMenuModal = (props) => {
    return ReactDOM.createPortal(
        <Div modal={props.open} setModal={props.setOpen} onClick={() => {props.setModal(!props.modal)}}>
            
        </Div> , document.getElementById("child-root")
    );
};

export default HambergurMenuModal;