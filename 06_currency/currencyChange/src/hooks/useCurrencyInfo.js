
import  {useEffect, useState} from "react"

function useCurrencyInfo(currency){
    const [data, setdata]=useState({})
    useEffect(()=>{
        fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json')
        .then((rec)=>rec.json())
        .then((rec)=>setdata(rec[currency]))
    },[currency])

    return data
}

export default useCurrencyInfo;
