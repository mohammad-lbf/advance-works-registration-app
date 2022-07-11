import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Div = styled.div`
background-color: ${props => props.darkmode ? "rgb(32, 32, 32)" : "#fff;"};
color:#fff;
a{
    color:${props => !props.darkmode ? "rgb(32, 32, 32)" : "#fff;"};
}
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
            <Link className="mb-3" to="/">Home page</Link>
            <Link className="mb-3" to="Login">Login</Link>
            <Link className="mb-3" to="AboutUs">About us</Link>
            <Link className="mb-3" to="CallUs">Call us</Link>
            <Link className="mb-3" to="products">Products</Link>
        </Div>
    );
};

export default HambergurMenu;