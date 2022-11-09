import { useEffect, useState } from "react";


export const useAsync= (asyncFunc,dependecies=[])=>{
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    if(!Array.isArray(dependecies)){
        dependecies=[]
    }
     useEffect(()=>{
       setIsLoading(true)
   
       asyncFunc().then(response =>{
        setData(response)
       }).finally(()=>{
         setIsLoading(false)
       })
   
     },dependecies)

     return{
        data,
        isLoading
     }
}