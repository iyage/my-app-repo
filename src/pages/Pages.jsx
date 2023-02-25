import React from 'react'
import {  Link, Outlet } from 'react-router-dom'
import logo from '../images/SproxilR_Transparent.png'
import styled from 'styled-components'
import { FaHome } from 'react-icons/fa'
import { IconButton } from '@material-ui/core'
import { useA2HS } from "react-use-a2hs";

    const PagesContainer = styled.div`
    height: 93vh;
    width: 100vw;
    position: relative;
    color: white;
    position: relative;
    overflow: hidden;
`
const Circle2= styled.div`
    height: 250px;
    width: 250px;
    border-radius: 50%;
    position: absolute;
    background-color: rgb(221, 128, 127);
    bottom: -80px;
    right: -100px;
    z-index: -1;
      @media screen and (min-height:'70vh') {
           display: none;
       }
       `
       const Circle3= styled.div`
    height: 250px;
    width: 250px;
    border-radius: 50%;
    position: absolute;
    background-color: rgb(143, 143, 143);
    bottom: -150px;
    right: -10px;
    z-index: -1;
      @media screen and (min-height:'70vh') {
           display: none;
       }
       `
 const Header = styled.div`
margin-top: 30px;
margin-bottom: 5px;
       `
       const ImgContainer = styled.div`
  display: flex;
  justify-content:center;
`
const Img = styled.img`
  width: 120px;
`

function Pages() {
    const [promptEvent, promptToInstall] = useA2HS();

    // const CopyRight = styled.p`
    //     font-size: 14px;
    //     letter-spacing: 1px;
    //     position: absolute;
    //     bottom: 70px;
    //     font-weight: 200;
    //     display: flex;
    //     width: 100%;
    //     justify-content: center;
    // `
// const auth = localStorage.getItem('auth')
  return  (
    <PagesContainer>
                  {promptEvent && (
        <button onClick={promptToInstall}>{"please install PWA"}</button>
      )}
        <Header>
<ImgContainer>
 <Img src={logo}/>
</ImgContainer>
</Header>
<IconButton
component={Link} to="/" 
>
<FaHome  />
</IconButton>

    <Outlet/>
      <Circle2/> 
      <Circle3/>
       {/* <CopyRight> Copyright &copy; {new Date().getFullYear()} Sproxil. All rights reserved.</CopyRight>
 
    */}
      {/* 
     */}
    </PagesContainer>
  )
}
// auth?
// :<Navigate to={"/"}/>
export default Pages