import React from "react";
import {useParams} from 'react-router-dom'

function User(){
   const {userid} = useParams()
   return(
      <div className="bg-pink-300 text-3xl text-white ml-6">User: {userid}</div>
   )
}

export default User
