// import Login from './pages/Login';
import { Route, Routes} from 'react-router-dom';
import Container from './pages/Container';
import NotFound from './pages/NotFound';
import Commission from './pages/Commission';
import Pages from './pages/Pages';

function App() {
  return (
    <>
    <Routes>

      {/* <Route path={'/'} element={<Login/>}/> */}
      <Route path='/' element={<Pages/>}>
        <Route index element={<Container/>}/>
         <Route path='/commission' element={<Commission/>} />
          <Route path="*" element={<NotFound/>}/>
      </Route>
     </Routes>
    </>
  );
}

export default App;
