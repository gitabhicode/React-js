import React, { useEffect } from 'react'
import {useLoaderData} from 'react-router-dom'
function Github(){
    const data = useLoaderData()
//     const [data , setData] = useStatee([])
//    useEffect(()=>{
//      fetch('https://api.github.com/users/gitabhicode') 
//      .then(response =>response.json())
//      .then(data =>{
//          console.log(data);
//          setData(data);         
//      })
//    },[])
   
    return (
        <div className='text-center m-4 bg-amber-400 text-white'>Github followers: {data.followers} 
        <img src="{data.avatar_url}" alt="Git picture" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async() =>{
    const response =   await fetch('https://api.github.com/users/gitabhicode')
    return response.json()
}