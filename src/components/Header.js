import React , {useState} from 'react';
import '../styles/Header.css'
import HambergurMenuModal from './HambergurMenuModal';
import HambergurMenuOpener from './HambergurMenuOpener';
const Header = ({darkmode , setDarkmode , open , setOpen}) => {
    return (
        <header className="main-header py-3 d-flex justify-content-between justify-content-xl-center align-items-center px-3 rounded">
            <HambergurMenuOpener open={open} setOpen={setOpen} darkmode={darkmode} setDarkmode={setDarkmode} />
            <div><p className="mb-0 header-title">برنامه پیشرفته ثبت کار</p></div>
        </header>
    );
};

export default Header;