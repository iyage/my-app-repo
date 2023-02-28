  
  
  export function checkLocationStatus(setGeoStatus)
  {
      navigator.permissions.query({name:'geolocation'}).then((resp)=>{
    if(resp.state==='granted'){
      if(navigator.geolocation)
      {
        navigator.geolocation.getCurrentPosition(success,error)
      }

    }
    else if(resp.state==='denied') {
       localStorage.clear(); 
    }
  })


function  success(position)
{
    console.log(position)
}

function error(err){
    console.log(err)
    setGeoStatus(true)

}
  }



