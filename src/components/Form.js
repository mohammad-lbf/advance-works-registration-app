import React from 'react';
import '../styles/Form.css'
const Form = () => {
    return (
        <div className="add-form-container rounded">
            
            <div className="add-form mt-3">
            <p className="mb-0 text-center fs-3 mt-5">افزودن کار جدید</p>
            <p className="text-end mb-1 mt-4">:عنوان کار</p>
            <input type="text" className="form-control" />
            <p className="text-end mt-3 mb-1 mt-4">:شرح کار</p>
            <textarea type="text" className="form-control" />
            <div className="w-100 d-flex justify-content-center mt-4">
            <button className="submit-work-btn">ثبت کار</button>
            </div>
            </div>
        </div>
    );
};

export default Form;