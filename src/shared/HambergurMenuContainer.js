import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HambergurMenuContainer.css'
const HambergurMenuContainer = ({darkmode , setDarkmode}) => {
    return (
        <div>
            <aside className="ham-menu d-flex d-xl-none flex-column align-items-center py-4">
            <Link to="/home">
            <div className="d-flex ham-menu-option flex-row-reverse">
                <div className="d-flex flex-row-reverse">
                <i className="bi bi-house text-success"></i>
                <p className="mb-0">خانه</p>
                </div>
                <p className="mb-0 ham-todo-num">0</p>
            </div>
            </Link>
            <Link to="/today">
            <div className="d-flex ham-menu-option flex-row-reverse">
                <div className="d-flex flex-row-reverse">
                <i className="bi bi-calendar-day text-info"></i>
                <p className="mb-0">کار های امروز</p>
                </div>
                <p className="mb-0 ham-todo-num">0</p>
            </div>
            </Link>
            <Link to="/done">
            <div className="d-flex ham-menu-option flex-row-reverse">
                <div className="d-flex flex-row-reverse">
                <i className="bi bi-check-circle text-primary"></i>
                <p className="mb-0">کار های انجام شده</p>
                </div>
                <p className="mb-0 ham-todo-num">0</p>
            </div>
            </Link>
            <Link to="/undone">
            <div className="d-flex ham-menu-option flex-row-reverse">
                <div className="d-flex flex-row-reverse">
                <i className="bi bi-x-circle text-danger"></i>
                <p className="mb-0">کار های انجام نشده</p>
                </div>
                <p className="mb-0 ham-todo-num">0</p>
            </div> 
            </Link>
            <div className="d-flex darkmode-option">
               <div className="form-check form-switch ">
                 <input className="form-check-input" onChange={()=>setDarkmode(!darkmode)} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
               </div>
               <p className="mb-0">حالت تیره</p>
            </div>  
            <div className="text-center mt-5 border p-3 rounded ham-copy-right">
                :توسعه داده شده توسط
                <br/>
                محمد لبافی
            </div>  
        </aside>
        </div>
    );
};

export default HambergurMenuContainer;