import React , {useContext , useState} from 'react';
import { worksContext } from '../context/WorksContextProvider';
import {useNavigate} from 'react-router-dom';
import { successNotify , failedNotify } from '../shared/Toast';
import { ToastContainer } from 'react-toastify';
import '../styles/Form.css';

const Form = () => {
    const {worksState , dispatch} = useContext(worksContext);
    const [titleInput , setTitleInput] = useState("");
    const [describtionInput , setDescribtionInput] = useState("");
    const navigate = useNavigate();
    const titleChangeHandler = (event)=>{
        setTitleInput(event.target.value);
    }
    const describtionChangeHandler = (event)=>{
        setDescribtionInput(event.target.value);
    }
    const registerButtonHandler = ()=>{
        if (titleInput && describtionInput){
            let date = new Date();    
            let year = date.getFullYear();
            let month = date.getMonth();
            let day = date.getDate();
            let hour = date.getHours();
            let min = date.getMinutes();
            let seconds = date.getSeconds();

            const newWork = {
                id:worksState.worksCounter + 1,
                title:titleInput,
                describtion:describtionInput,
                done:false,
                date:`${year < 10 ? "0" : ""}${year}/${month < 10 ? "0" : ""}${month}/${day < 10 ? "0" : ""}${day}`,
                time:`${hour < 10 ? "0" : ""}${hour}:${min < 10 ? "0" : ""}${min}:${seconds < 10 ? "0" :""}${seconds}`,
            };
            dispatch({type:"ADDWORK" , payload:newWork});
            console.log(worksState.works)
            setTitleInput("");
            setDescribtionInput("");
            navigate("/home")

        }
        else if(!titleInput && !describtionInput){
            failedNotify("لطفا برای کار خود عنوان و شرحی اضافه کنید")
        }
        else if(!titleInput && describtionInput){
            failedNotify("لطفا برای کار خود عنوانی اضافه کنید") 
        }
        else if(titleInput && !describtionInput){
            failedNotify("لطفا برای کار خود شرحی اضافه کنید")
        }
    }

    return (
        <>
        <div className="add-form-container rounded">
            <div className="add-form mt-3">
            <p className="mb-0 text-center fs-3 mt-5">افزودن کار جدید</p>
            <p className="text-end mb-1 mt-4">:عنوان کار</p>
            <input onChange={titleChangeHandler} value={titleInput} type="text" className="form-control text-end" />
            <p className="text-end mt-3 mb-1 mt-4">:شرح کار</p>
            <textarea onChange={describtionChangeHandler} value={describtionInput} type="text" className="text-end form-control" />
            <div className="w-100 d-flex justify-content-center mt-4">
            <button onClick={registerButtonHandler} className="submit-work-btn">ثبت کار</button>
            </div>
            </div>
        </div>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
                />
        </>
    );
};

export default Form;