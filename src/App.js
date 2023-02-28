import Login from './pages/Login';
import { Route, Routes} from 'react-router-dom';
import Container from './pages/Container';
import NotFound from './pages/NotFound';
import Commission from './pages/Commission';
import Pages from './pages/Pages';
import { useA2HS } from 'react-use-a2hs';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import logo2 from './images/logo.png'
import { useEffect, useState } from 'react';
import { StyleButtonPrimary } from './components/buttons';
const PromptWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
 
`
const ButtonContainer = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
`
const PromptImageCont  =styled.div `
  text-align: center;
`

 const StyleButton = styled(Button)`
   height: 50px !important;
   background-color: rgb(33, 33, 33) !important;
   width: 100%;
`
const PromptContainer = styled.div`
  background-color:white;
  width: 100%;
  height: 120px;
  position: absolute;
  bottom: 0;
  padding: 10px;
`
const  GeoConatainer = styled.div`
  position: absolute;
  top: 0;
  left:0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.3);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black !important;
`

const NotificationContainer = styled.div`
  width:90%;
  height: 300px;
  background-color: white;
  border:2px solid rgb(190, 2, 3);
   box-shadow: 0px 0px 5px 0px rgba(190,2,3);
   padding: 20px;
   position: relative;
   color: black !important;
`
const HelperText = styled.p`
color: inherit;
font-size: 18px;
`
function App() {
const [promptEvent, promptToInstall] = useA2HS();
const [geoStatus,setGeoStatus] = useState(false)
useEffect(()=>{
if(navigator.geolocation){
  console.log("supported");
  navigator.geolocation.getCurrentPosition(success,fail,option)
}
else console.log("not supported")

function success(position){
 console.log(position)
}

function fail(error)
{
 console.log(error)
 setGeoStatus(true)
}
function option()
{

}

},[geoStatus])

  return (
    <div style={{position:'absolute'}}>
            {geoStatus&&
      <GeoConatainer>
<NotificationContainer >
 <HelperText>Please grant the application permission to use location before proceeding.</HelperText>
 <br/>
  <HelperText>If you need help in setting up permission ples=ase follow this link for help 🚧</HelperText>

 <StyleButtonPrimary style={{ width: '100px', height:'40px',position:'absolute',bottom:'50px',left:'35%'}}
 onClick={()=>setGeoStatus(false)}
 >OK</StyleButtonPrimary> 
</NotificationContainer>
      </GeoConatainer>
      }
    <Routes>

      <Route path={'/'} element={<Login/>}/>
      <Route path='/pages' element={<Pages/>}>
        <Route index element={<Container/>}/>
         <Route path='/pages/commission' element={<Commission/>} />
          <Route path="*" element={<NotFound/>}/>
      </Route>
     </Routes>
          {console.log(promptEvent)}
   {promptEvent && (
< PromptContainer>
     <PromptWrapper>
      <PromptImageCont>
        <img src={logo2} alt='' style={{width:'80px'}}/>
      </PromptImageCont>
      <ButtonContainer>
         <StyleButton onClick={promptToInstall}>ADD to Home screen</StyleButton>
      </ButtonContainer>

     </PromptWrapper>
     </PromptContainer>
      )}   
    </div>
  );
}

export default App;
