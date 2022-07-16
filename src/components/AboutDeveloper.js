import React from 'react';
import Plus from '../shared/Plus';

const AboutDeveloper = () => {
    return (
        <div className="home rounded p-3">
            <div>
                <p className="lh-lg text-end text-center text-lg-end">
                : مشخصات طراح و توسعه دهنده پروژه
                <br />
                نام و نام خانوادگی : محمد لبافی
                <br />
                <br />
                : مهارت ها
                <br />
                </p>
                <p className="lh-lg mt-2 text-center text-lg-start">
                HTML & CSS
                    <br/>
                    Java Script (ES 6)
                    <br />
                    bootstrap 5
                    <br />
                    SASS
                    <br />
                    Git & Git hub
                    <br />
                    React js (React hooks & functional)
                    <br/>
                    react router dom (SPA site)
                    <br />
                    Redux
                    <br />
                    GrafQL
                    <br />
                </p>
            </div>
            <Plus />
        </div>
    );
};

export default AboutDeveloper;