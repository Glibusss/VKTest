import React, { useRef, useState, useEffect } from 'react';
import CatForm from '../../components/CatForm/CatForm';
import UserForm from '../../components/UserForm/UserForm';
import './MainPage.css';

export const MainPage = () => {

    return (
        <div className="main-page">
            <CatForm/>
            <UserForm/>
        </div>
    );
};
