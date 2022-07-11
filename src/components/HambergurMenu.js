import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import HambergurMenuContainer from '../shared/HambergurMenuContainer';

const Div = styled.div`
background-color: ${props => props.darkmode ? "#324376" : "#324376;"};
color:#fff;
a{
    color:${props => !props.darkmode ? "rgb(32, 32, 32)" : "#fff;"};
}
    border:${props => props.darkmode ? "1px solid rgb(48, 48, 48)" : "1px solid rgb(224, 224, 224);"};
width:300px;
height:100vh;
position:fixed;
top:0;
right:0;
z-index:105;
transition: all 0.3s linear;
@media (min-width:768px){
    display:none;
}
transform: ${props => props.open ? "translateX(0)" : "translateX(100%)"};
`

const HambergurMenu = (props) => {
    return (
        <Div className="d-flex d-xl-none flex-column pt-5" open={props.open} darkmode={props.darkmode}>
            <HambergurMenuContainer darkmode={props.darkmode} setDarkmode={props.setDarkmode} />
        </Div>
    );
};

export default HambergurMenu;