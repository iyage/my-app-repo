import {Html5Qrcode} from "html5-qrcode"

let html5QrCode =  null; 
export function scanner(play,output,scannedVals,setScannedVals,setTotalScanned)
{
     html5QrCode = new Html5Qrcode("reader");

       let uniqueSgtins =  new Set(scannedVals)
       // eslint-disable-next-line no-unused-vars
          let  lastResult,countResults=0;
            const qrCodeSuccessCallback = (decodedText, decodedResult) => {
            /* handle success */
            if (decodedText !== lastResult) {
                ++countResults;
                lastResult = decodedText;
                play();
                 output(decodedText)
                  uniqueSgtins.add(decodedText)
                  setTotalScanned(uniqueSgtins.size)
                  setScannedVals(Array.from(uniqueSgtins))
              
                
            }
        };
        const config = { fps: 10, qrbox: { width: 230, height: 230 } };
        html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
}


export const stopScanner = ()=>{
html5QrCode.stop();
}

