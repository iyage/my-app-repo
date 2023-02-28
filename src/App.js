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
function App() {
const [promptEvent, promptToInstall] = useA2HS();
  return (
    <div style={{position:'absolute'}}>

    <Routes>

      <Route path={'/'} element={<Login/>}/>
      <Route path='/pages' element={<Pages/>}>
        <Route index element={<Container />}/>
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
