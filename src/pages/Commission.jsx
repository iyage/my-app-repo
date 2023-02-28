import { Button } from '@material-ui/core'
import styled from 'styled-components';
import { FaCamera, FaCloudUploadAlt, FaStopCircle } from 'react-icons/fa';
import useSound from 'use-sound';
import beep from "../beep.wav"
import { scanner, stopScanner } from '../apis/scanner';
import { useEffect, useState } from 'react';
import Swal from "sweetalert2";
import CryptoJS from 'crypto-js'
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { fetchAllClientLocations, userlogin } from '../apis/api';
import { ScaleLoader } from 'react-spinners';

const ScannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 1px;
  flex-direction: column;
  row-gap: 20px;
`
const Container = styled.div`
  width: 98%;
`
const Locations = styled.select`
  height: 45px;
  width: 100%;
`
function Commission() {
const [play] = useSound(beep);
const [scannedOutput,setScannedOutput] = useState("");
const [scannerStatus,setScanStatus] = useState(false)
const [scannedVals,setScannedVals]= useState([]);
const [totalScanned,setTotalScanned] = useState(0)
const[latitude,setLatitude] = useState("")
const[longitude,setLongitude] = useState("")
const[location,setLocation] = useState("")
const key = localStorage.getItem("user-key");
const userKey = CryptoJS.AES.decrypt(key,'secret key 123').toString(CryptoJS.enc.Utf8);
const navigate = useNavigate();
  useEffect(()=>{
    navigator.permissions.query({name:'geolocation'}).then((resp)=>{
    if(resp.state==='granted'){
      if(navigator.geolocation)
      {
        navigator.geolocation.getCurrentPosition(success,error)
      }

    }
    else if(resp.state==='denied') {
       localStorage.clear();
         navigate("/")
    }
  })


function  success(position)
{
    setLatitude(`${position.coords.latitude}`)
   setLongitude(`${position.coords.longitude}`)
    console.log(userKey)
}

function error(err){
    console.log(err)
    localStorage.clear();
    navigate("/")

}

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
   const showAlert = () => {
        Swal.fire({
            title: "Success",
            text: "Alert successful",
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor:'red'
          }).then((response)=>{
            if(response.isConfirmed|| response.dismiss||response.isDenied)
            {
                navigate("/pages")
            }
          });
    }
const { mutate,isLoading} = useMutation(
  (variables) => userlogin(variables),
  {
    onSuccess(data, variables, context) {
      console.log(data)
            showAlert()
          // stopScanner();
          // setTotalScanned(0)
          //  setScannedVals([])
          //  setScannedOutput("")
    },
    onError(error){
       if(error.code !== "ERR_NETWORK")
      {
        showAlert(error.response.data.message)
      }
      else  showAlert(error.message)
    },
  }
)
     const locations= useQuery('locations',()=>{  
  console.log(userKey);
return fetchAllClientLocations(userKey);
 },{
  enabled:true
 })
function payload()
{
      const eventTime = new Date().toISOString();
     const recordTime = new Date().toISOString(); 
    const readPoint = location;
    const bizStep=  "urn:epcglobal:cbv:bizstep:encoding";
    const disposition = "urn:epcglobal:cbv:disp:active";
    const timeZone ="+01:00";
    const memberTokenForSP = userKey;
     const payload = {
     eventObjectParameter: {
      memberTokenForSP,
      eventTime,
      recordTime,
      readPoint,
      bizStep,
      disposition,
      latitude,
      longitude,
      timeZone
    },
       "commissionData": {
    "elementstrings": scannedVals
}
    }

    return payload
}


  return (
    <Container>
      <p><strong>Total Scan :</strong> {totalScanned}</p>
      <p style={{fontSize:'12px'}}>{scannedOutput}</p>
                             <Locations
                onChange={(e)=>setLocation(e.target.value)}
            styles={{
                    width:'100%',
                    height:'45px important',
                    padding:'10px'
            }}
   >
   
    {locations.isFetched?((locations.data.data.returnedObject!=null&&locations.data.data.returnedObject.length>0)?locations.data.data.returnedObject.map((location)=>{
                    return <option value={location.gln} key={location.gln}> {location.address}</option>
                }):[]):[]}
   </Locations>
         <div id='reader' style={{width:'260px',height:'300px',margin:'auto'}}></div>

      <ScannerContainer >
        
        {!scannerStatus&&<Button endIcon={<FaCamera/>} variant='contained' color='secondary'
                onClick={()=>{
          scanner(play,setScannedOutput,scannedVals,setScannedVals,setTotalScanned);
          setScanStatus(true)
          console.log(location)
  }}
        >Start Scanner</Button>}
            {scannerStatus&&<Button variant='contained' color='secondary'
            endIcon={<FaStopCircle/>}
      onClick={()=>{stopScanner();
         setScanStatus(false)}}
      >Stop Scanner</Button>}
         {totalScanned>0&&<Button variant='outlined' color='secondary' endIcon={<FaCloudUploadAlt/>}
         onClick={()=>{

          mutate(payload)
         }}
         >{isLoading?<ScaleLoader  height={23} width={3} color='white'/>:<span>Commission All</span>}</Button>}
      </ScannerContainer>
     

{/* {   scannerState&& <ScannerContainer> */}
     {/* <video  ref={video} id="video" width="97%" height="250" style={{border: "1px solid red"}}></video> */}
    {/* </ScannerContainer>} */}

    </Container>


  )
}

export default Commission