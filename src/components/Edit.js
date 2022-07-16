import React, { useContext , useState } from 'react';
import { useParams , Link , useNavigate} from 'react-router-dom';
import { worksContext } from '../context/WorksContextProvider';
const Edit = () => {
    const id = useParams().id;
    const {worksState , dispatch} = useContext(worksContext);
    const currentWork  = worksState.works.find(work => work.id == id);
    const [newTitle , setNewTitle] = useState(currentWork.title);
    const [newDescribtion , setNewDescribtion] = useState(currentWork.describtion);
    const navigate = useNavigate();
    const editWorkBtnHandler = ()=>{
        dispatch({type:"EDITWORK" , payload:{id:id , newTitle:newTitle , newDescribtion:newDescribtion}});
        navigate("/home")
    }
    return (
        <div className="add-form-container rounded">
            <div className="add-form mt-3">
            <p className="mb-0 text-center fs-3 mt-5">ویرایش کار </p>
            <p className="text-end mb-1 mt-4">:عنوان کار</p>
            <input onChange={(e)=> setNewTitle(e.target.value)} value={newTitle} type="text" className="form-control" />
            <p className="text-end mt-3 mb-1 mt-4">:شرح کار</p>
            <textarea onChange={(e)=> setNewDescribtion(e.target.value)} value={newDescribtion} type="text" className="form-control" />
            <div className="w-100 d-flex justify-content-center mt-4">
            <div className="d-flex align-items-center flex-row-reverse">
            <button onClick={editWorkBtnHandler} className="submit-work-btn ms-1 text-white">ویرایش کار</button>
            <Link to="/home" className="submit-work-btn text-white">انصراف</Link>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Edit;