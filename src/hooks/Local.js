import { useEffect, useState } from "react"

export function useLocalStorage(key, initialValue) {
    const [data, setData]= useState(initialValue)
    
    useEffect(()=>{
        const existingData = localStorage.getItem(key)
        if (existingData) {
            setData(JSON.parse(existingData))
        }
        else{
            localStorage.setItem(key, JSON.stringify(initialValue))
        }

    }, [])

    const updataData = (newData)=>{
        if(typeof newData === 'function'){
            localStorage.setItem(key, JSON.stringify(newData(data)))
        }
        else{

            localStorage.setItem(key, JSON.stringify(newData))
        }
         setData(newData)
    }

    return [data, updataData]
}