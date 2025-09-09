import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_MnFS1Hnk6GDSv1gdZsFfbCVwHR1IH4gv1bLEDlzf`)
        .then((res)=>res.json())
        .then((res)=> setData(res[currency])) 
        console.log(data);             
    },[currency])
    console.log(data);
    return data
}

export default useCurrencyInfo