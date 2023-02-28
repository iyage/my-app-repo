import {TextField } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { FaTelegram } from "react-icons/fa";
import { useForm,Controller } from 'react-hook-form';
import {useMutation} from 'react-query'
import logo from '../images/SproxilR_Transparent.png'
// import { ScaleLoader } from 'react-spinners'
// import { fail } from '../components/Notifications'
import { userlogin } from '../apis/api';
import { Navigate, useNavigate} from 'react-router-dom'
import { StyleButtonPrimary } from '../components/buttons';
import CryptoJS from 'crypto-js'


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
    background-color: rgb(221, 128, 127);
    bottom: -50px;
    left: -50px;
    z-index: -1;
`
const Circle2= styled.div`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    position: absolute;
    background-color: rgb(221, 128, 127);
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
    background-color: rgb(221, 128, 127);
    bottom: 22%;
    right: 25%;
    z-index: -1;
`
const Circle4 = styled.div`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    position: absolute;
    background-color: rgb(221, 128, 127);
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

function Login() {
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

const { mutate} = useMutation(
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
      alert(error)
    //   fail(error.response.data.message)
      console.log(error.response.data.message)
    },
  }
)

  return !auth? (

    <Container>
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
  {errors.password?.type==='required'&&<p> REquired</p>}
</ForMControl>
  <StyleButtonPrimary type='submit' variant='contained' fullWidth size='large' color='secondary' endIcon={<FaTelegram/>}>Login</StyleButtonPrimary>
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