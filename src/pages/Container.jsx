import { Button } from '@material-ui/core'
// import Button from '@mui/material-next/Button';
import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'
// import { StylesProvider } from "@material-ui/core/styles";
import icon  from '../images/icon.png'
const PagesContainer = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
    color: white;
    position: relative;
    overflow: hidden;
`

const ButtonContainer = styled.div`
  width: 90%;
  margin: auto;
  padding: 5px;
`
const ForMControl = styled.div`
    width: 100%;
    margin: 10px 0;
    position: relative;
    padding: 5px 0;
`
const StyleButton = styled(Button)`
   height: 50px !important;
   background-color: rgb(190, 2, 3) !important;
   /* border-radius: px !important; */
   width: 100%;
`
const Img = styled.img`
width: 100%;
`
const ImgContainer = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid rgb(33, 33, 33);
  border-radius: 50%;
  position: absolute;
  left: -25px;
  top: -13px;
  background-color: rgb(33, 33, 33);
  display: flex;
  justify-content: center;
  align-items: center;

`
function Container() {
  return (
    <PagesContainer>

<ButtonContainer>
  <ForMControl>
  <StyleButton  variant='contained'
  component={Link} to='/commission'
  >Commission</StyleButton>
     <ImgContainer ><Img src={icon}/></ImgContainer>
  </ForMControl>
          <ForMControl>
  <StyleButton  variant='contained'>Pack</StyleButton>
     <ImgContainer ><Img src={icon}/></ImgContainer>
  </ForMControl>
            <ForMControl>
  <StyleButton  variant='contained'>Unpack</StyleButton>
     <ImgContainer ><Img src={icon}/></ImgContainer>
  </ForMControl>
              <ForMControl>
  <StyleButton  variant='contained'>Ship</StyleButton>
     <ImgContainer ><Img src={icon}/></ImgContainer>
  </ForMControl>
                <ForMControl>
  <StyleButton  variant='contained'>Receive</StyleButton>
     <ImgContainer ><Img src={icon}/></ImgContainer>
  </ForMControl>
  


</ButtonContainer>
    </PagesContainer>
  )
}

export default Container