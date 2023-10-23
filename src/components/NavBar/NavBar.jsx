import React from "react";
import {Link} from "react-router-dom"
import {PATH} from "../../constants/path";

import * as S from "./style"

const NavBar = () => {
    return (
        <S.NavBar>
            <S.NavMenuHome>
                <S.NavLink to={PATH.HOME}>수능 AllinOne</S.NavLink>
            </S.NavMenuHome>
            <S.Wrapper>
                <S.NavMenu>
                    <S.NavLink to={PATH.LECTURE_LIST}>강의</S.NavLink>
                </S.NavMenu>
                <S.NavMenu>
                    <S.NavLink to={PATH.RECOMMENDED_LECTURE}>추천 강의</S.NavLink>
                </S.NavMenu>
                <S.NavMenu>
                    <S.NavLink to={PATH.BOOKMARKED_LECTURE}>찜한 강의</S.NavLink>
                </S.NavMenu>
            </S.Wrapper>
            <S.LoginButton>로그인</S.LoginButton>
        </S.NavBar>
    );
}

export default NavBar;