import {TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaTelegram } from "react-icons/fa";
import { useForm,Controller } from 'react-hook-form';
import {useMutation} from 'react-query'
import logo from '../images/SproxilR_Transparent.png'
import { ScaleLoader } from 'react-spinners'
import { userlogin } from '../apis/api';
import { Navigate, useNavigate} from 'react-router-dom'
import { StyleButtonPrimary } from '../components/buttons';
import CryptoJS from 'crypto-js';
import Swal from "sweetalert2";


const Container = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
    color: white;
    position: relative;
    overflow: hidden;
`
const FormWrapper = styled.div`
    width: 80%;
    margin: auto;
    padding: 20px 10px;
    margin-top: 50px;
`
const ImgContainer = styled.div`
  display: flex;
  justify-content:center;
`
const Img = styled.img`
  width: 120px;
`
const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiFormLabel-root': {
            color: 'gray'
        },
  
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'red',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});
const ForMControl = styled.div`
    width: 100%;
    margin: 20px 0;
`
const FirstCircle = styled.div`
    height: 150px;
    width: 150px;
    border-radius: 50%;
    position: absolute;
    background-color: rgba(221, 128, 127,0.3);
    bottom: -50px;
    left: -50px;
    z-index: -1;
`
const Circle2= styled.div`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    position: absolute;
    background-color: rgba(221, 128, 127,0.3);
    bottom: -50px;
    right: -50px;
    z-index: -1;
      @media screen and (min-height:'70vh') {
           display: none;
       }
`
const Circle3= styled.div`
    height: 90px;
    width: 90px;
    border-radius: 50%;
    position: absolute;
    background-color: rgba(143, 143, 143,0.4);
    bottom: 22%;
    right: 25%;
    z-index: -1;
`
const Circle4 = styled.div`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    position: absolute;
    background-color: rgba(221, 128, 127,0.3);
    top: -90px;
    left: -90px;
       z-index: -1;
     
    `
    const CopyRight = styled.p`
        font-size: 12px;
        margin-top: 60px;
        letter-spacing: 1px;
        text-align: center;
        position: absolute;
        bottom: 30px;
        font-weight: 200;
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
  border-radius: 10px;
   box-shadow: 0px 0px 5px 0px rgba(190,2,3);
   padding: 20px;
   position: relative;
   color: black !important;
`
const HelperText = styled.p`
color: inherit;
font-size: 18px;
`

function Login() {
  const [geoStatus,setGeoStatus] = useState(false)
  let auth = localStorage.getItem('auth')!==null?localStorage.getItem('auth'):false
const navigate = useNavigate();
const {
  handleSubmit,
  control,
  formState: { errors },
} = useForm();

 const onSubmit=  (data)=>{
    console.log(data)
 mutate(data)
}

const { mutate,isLoading} = useMutation(
  (variables) => userlogin(variables),
  {
    onSuccess(data, variables, context) {
        console.log(data.data)
        localStorage.setItem('auth',true)
        localStorage.setItem('user-email',(data.data.data.email))
        localStorage.setItem('user-name',(data.data.data.companyName))
     auth = true;
        localStorage.setItem('user-type',(data.data.data.type))
       // Encrypt
const key = CryptoJS.AES.encrypt(data.data.data.userKey, 'secret key 123').toString();
localStorage.setItem('user-key',(key))
       navigate('/pages',{replace:true} )
    },
    onError(error){
      console.log(error)
       if(error.code !== "ERR_NETWORK")
      {
        showAlert(error.response.data.message)
      }
      else  showAlert(error.message)
    },
  }
)


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
   const showAlert = (message) => {
        Swal.fire({
            title: "Error",
            text: message,
            icon: "error",
            confirmButtonText: "OK",
            confirmButtonColor:'red'
          });
    }

  return !auth? (

    <Container>
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
        <FormWrapper>
              <ImgContainer>
  <Img src={logo}/>
  </ImgContainer>
              <form onSubmit={handleSubmit(onSubmit)}>
        <ForMControl>
<Controller
control={control}
rules={{required:true}}
name='email'
defaultValue=''
  render={({ field }) => (
   <CssTextField fullWidth label="email address" variant="outlined"
   {...field}
  inputProps={{ style: { color: "white" }}
}
   />
  )}
/>
</ForMControl>
        <ForMControl>
            <Controller
            defaultValue=''
  render={({ field }) => (
       <CssTextField fullWidth  label="password"   variant="outlined"
   {...field}
  inputProps={{ style: { color: "white" }}}
  />)}
  control={control}
rules={{required:true}}
name='password'
  />
  {errors.password?.type==='required'&&<p> Required</p>}
</ForMControl>
  <StyleButtonPrimary type='submit' variant='contained' fullWidth size='large' color='secondary' endIcon={<FaTelegram/>}>{isLoading?<ScaleLoader  height={23} width={3} color='white'/>:<span>Login</span>}</StyleButtonPrimary>
   <CopyRight> Copyright &copy; {new Date().getFullYear()} Sproxil. All rights reserved.</CopyRight>
  </form>
        </FormWrapper>

    
      <Circle4/>
      <FirstCircle/>
      < Circle2/>
      <Circle3/>
    </Container>
  ):  <Navigate to={"/pages"}/>
// 
}

export default Login