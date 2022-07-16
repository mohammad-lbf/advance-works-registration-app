import React , {useContext} from 'react';
import { Link } from 'react-router-dom';
import { worksContext } from '../context/WorksContextProvider';
import { filterWorksContext } from '../context/FilterWorksContextProvider';
import '../styles/DesktopAside.css';

const DesktopAside = ({setDarkmode , darkmode}) => {
    const {worksState , dispatch} = useContext(worksContext);
    const {doneWorksFilter , unDoneWorksFilter , todayWorksFilter} = useContext(filterWorksContext);
    return (
        <aside className="aside d-none d-xl-flex flex-column align-items-center py-4">
            <Link to="/home">
            <div className="d-flex desktop-aside-option flex-row-reverse">
                <div className="d-flex flex-row-reverse">
                <i className="bi bi-house text-success"></i>
                <p className="mb-0">خانه</p>
                </div>
                <p className="mb-0 todo-num">{worksState.worksCounter}</p>
            </div>
            </Link>
            <Link to="/today">
            <div className="d-flex desktop-aside-option flex-row-reverse">
                <div className="d-flex flex-row-reverse">
                <i className="bi bi-calendar-day text-info"></i>
                <p className="mb-0">کار های امروز</p>
                </div>
                <p className="mb-0 todo-num">{todayWorksFilter.length}</p>
            </div>
            </Link>
            <Link to="/done">
            <div className="d-flex desktop-aside-option flex-row-reverse">
                <div className="d-flex flex-row-reverse">
                <i className="bi bi-check-circle text-primary"></i>
                <p className="mb-0">کار های انجام شده</p>
                </div>
                <p className="mb-0 todo-num">{doneWorksFilter.length}</p>
            </div>
            </Link>
            <Link to="/undone">
            <div className="d-flex desktop-aside-option flex-row-reverse">
                <div className="d-flex flex-row-reverse">
                <i className="bi bi-x-circle text-danger"></i>
                <p className="mb-0">کار های انجام نشده</p>
                </div>
                <p className="mb-0 todo-num">{unDoneWorksFilter.length}</p>
            </div> 
            </Link>
            <div className="d-flex darkmode-option">
               <div className="form-check form-switch ">
                 <input className="form-check-input" checked={darkmode ? true : false} onChange={()=>setDarkmode(!darkmode)} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
               </div>
               <p className="mb-0">حالت تیره</p>
            </div>  
            <div className="text-center mt-5 border p-3 rounded copy-right">
                :توسعه داده شده توسط
                <br/>
                محمد لبافی
            </div>  
        </aside>
    );
};

export default DesktopAside;