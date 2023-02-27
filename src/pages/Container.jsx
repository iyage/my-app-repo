import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'
import { StyleButtonPrimary } from '../components/buttons'
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
  <StyleButtonPrimary variant='contained'
  component={Link} to='/pages/commission'
  >Commission</StyleButtonPrimary>
     <ImgContainer ><Img src={icon}/></ImgContainer>
  </ForMControl>
          <ForMControl>
  <StyleButtonPrimary variant='contained'>Pack</StyleButtonPrimary>
     <ImgContainer ><Img src={icon}/></ImgContainer>
  </ForMControl>
            <ForMControl>
  <StyleButtonPrimary variant='contained'>Unpack</StyleButtonPrimary>
     <ImgContainer ><Img src={icon}/></ImgContainer>
  </ForMControl>
              <ForMControl>
  <StyleButtonPrimary variant='contained'>Ship</StyleButtonPrimary>
     <ImgContainer ><Img src={icon}/></ImgContainer>
  </ForMControl>
                <ForMControl>
  <StyleButtonPrimary variant='contained'>Receive</StyleButtonPrimary>
     <ImgContainer ><Img src={icon}/></ImgContainer>
  </ForMControl>
</ButtonContainer>
    </PagesContainer>
  )
}

export default Container