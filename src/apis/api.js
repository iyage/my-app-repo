import axios from "axios";
export const gs1_api = axios.create({
    baseURL:process.env.REACT_APP_GS1_BASE_URL
})
export const sp_api = axios.create({
    baseURL:process.env.REACT_APP_SP_BASE_URL
})
export const userlogin= async (data)=>{
  const  response = await sp_api.post(' http://192.168.1.160:3000/gs1/standard/user/login',data,{
    headers:{
        "content-type":"application/json"
    }
  })
    return response;
}
export const getClientKey = async (email)=>{
    return await gs1_api.get('/account/memberkeyforsp?email='+email,{
                   headers:{
                    'Authorization':  `Bearer ${process.env.REACT_APP_PARTNER_KEY}`  
    }
    })
}

export const fetchAllClients = async ()=>{

    return await sp_api.get('/app/user/getAllClients')
}
export const fetchAllClientLocations  = async (key)=>{

    return await gs1_api.get( `location/locations?userKeyForSP=${key}`,{
        headers:{
         'Authorization':  `Bearer ${process.env.REACT_APP_PARTNER_KEY}`
    }
    })
}
export const fetchAllClientProducts = async (key)=>{

    return await gs1_api.get( `/product/products?userKeyForSP=${key}`,{
        headers:{
         'Authorization':  `Bearer ${process.env.REACT_APP_PARTNER_KEY}`
    }
    })
}
export const checkSerialRange = async (data)=>{

    return await sp_api.post( `/app/user/serial_number_available`,data,{
           headers:{
        "content-type":"application/json"
    }
    })
}


export const registerNewClient = async (data)=>{

    return await sp_api.post('/app/user/registerNewClient',data,{
           headers:{
        "content-type":"application/json"
    }
    })
    
    
}
export const allotteSerialNumberRange = async (data)=>{

    return await sp_api.post('/app/user/alloteSerialNumberRange',data,{
           headers:{
        "content-type":"application/json"
    }
    })  
}

export const fetchlots = async ()=>{

    return await sp_api.get('/app/user/getAllLot',{
           headers:{
        "content-type":"application/json"
    }
    })
}

export const fetchLotByClientKey = async (data)=>{

    return await sp_api.post('/app/user/getLotByClientKey',data,{
           headers:{
        "content-type":"application/json"
    }
    })  
}
export const fetchBatchByEmail = async (data)=>{

    return await sp_api.post('/app/user/getBatchByEmail',data,{
           headers:{
        "content-type":"application/json"
    }
    })  
}
export const  rollBackAllotedSerialRange = async (data)=>{

    return await sp_api.post('/app/user/deleteSerialNumberRange',data,{
           headers:{
        "content-type":"application/json"
    }
    })  
}
export const  formatteSgtins = async (data)=>{

    return await gs1_api.post( '/Formatter/sgtinformatter',data,{
        headers:{
         'Authorization':  `Bearer ${process.env.REACT_APP_PARTNER_KEY}`
    }
    }) 
}

export const  uploadFormattedStin = async (data)=>{

    return await sp_api.post('/app/user/createSgtin',data,{
           headers:{
        "content-type":"application/json"
    }
    })  
}
export const  fetchSerialRange = async (data)=>{

    return await sp_api.post('/app/user/fetchSerialRange',data,{
           headers:{
        "content-type":"application/json"
    }
    })  
}
export const  uploadClientProd = async (data)=>{

    return await sp_api.post('/app/user/register_client_prods',data,{
           headers:{
        "content-type":"application/json"
    }
    })
} 
export const  fetchSerialNumberRange = async (data)=>{

    return await sp_api.post('/app/user/fetch_serial_number_range',data,{
           headers:{
        "content-type":"application/json"
    }
    })
} 
export const  serialNumberEncodeUpdate = async (data)=>{

    return await sp_api.post('/app/user/updateSgtinEncode',data,{
           headers:{
        "content-type":"application/json"
    }
    }) 
} 
export const  rollBackSerialNumberEncodeUpdate = async (data)=>{

    return await sp_api.post('/app/user/rollBackupdateSgtinEncode',data,{
           headers:{
        "content-type":"application/json"
    }
    }) 
}

export const  uploadSerialization = async (data)=>{

    return await gs1_api.post( '/traceability/uploadserialization',data,{
        headers:{
         'Authorization':  `Bearer ${process.env.REACT_APP_PARTNER_KEY}`
    }
    }) 
}

export const  recordEventHistory = async (data)=>{

    return await sp_api.post( '/app/user/recordEventHistory',data,{
        headers:{
          "content-type":"application/json"
    }
    }) 
}
export const  rollBackEventHistory = async (data)=>{

    return await sp_api.post( '/app/user/rollBackEventHistory',data,{
        headers:{
          "content-type":"application/json"
    }
    }) 
}
export const  fetchLotExpiryDate = async (data)=>{

    return await sp_api.post( '/app/user/filterExpiryDateByLot',data,{
        headers:{
          "content-type":"application/json"
    }
    }) 
    
}
export const  fetchedEncodedSerialLot = async (data)=>{

    return await sp_api.post( '/app/user/fetchedEncodedSerialLot',data,{
        headers:{
          "content-type":"application/json"
    }
    }) 
}

export const  addNewLot  = async (data)=>{

    return await sp_api.post( '/app/user/addNewLot',data,{
        headers:{
          "content-type":"application/json"
    }
    }) 
}

export const commisionSpc = async (data)=>{
    return await gs1_api.post('/traceability/commissionepc',data,{
                   headers:{
                    'Authorization':  `Bearer ${process.env.REACT_APP_PARTNER_KEY}`  
    }
    })
}