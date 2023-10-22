import React from 'react';
import "./Nav.css";

function Nav() {
    return (
        <div className='nav_bar'>
            <div className='nav_title'>수능 AllinOne</div>
            <button className='nav_btn' type='button'>강의</button>
            <button className='nav_btn' type='button'>추천 강의</button>
            <button className='nav_btn' type='button'>찜한 강의</button>
            <button className='nav_login_btn' type='button'>로그인</button>
        </div>
    )
}

export default Nav