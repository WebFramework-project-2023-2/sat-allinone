import styled, {css} from "styled-components";
import {Link} from "react-router-dom";


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;
  
  margin-left: 300px;
  margin-right: 518px;
  
`

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  
  
  width : 1280px;
  height : 79px;
  margin: 0 auto;
  
  background-color: #BADDFE;
`

const NavMenu = styled.div`
    display: flex;
    flex-shrink: 0;
  
    width : 155px;
    height : 33px;
  
    color: #000;
    text-align: center;
    font-family: 'PartialSansKR-Regular', serif;
    font-size: 25px;
    font-weight: 400;
    line-height: normal;
`

const NavMenuHome = styled(NavMenu)`
  width : 180px;
  font-size: 18px;
  margin-left: 50px;
`

const NavLink = styled(Link)`
  &:link{
    color: #000;
    text-decoration: none;
  }

  &:visited{
    color: #000;
    text-decoration: none;
  }

  &:hover{
    color: #000;
    text-decoration: none;
  }
`

const LoginButton = styled.button`
  display: inline-flex;

  color: #FFF;
  background-color: #96CCFF;
  
  width: 112px;
  height: 48px;
  
  text-align: center;
  font-family: 'PartialSansKR-Regular', serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export {NavBar, NavMenu, NavMenuHome, NavLink, Wrapper, LoginButton};