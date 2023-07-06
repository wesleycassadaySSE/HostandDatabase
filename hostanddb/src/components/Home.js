import React, { useState } from 'react'
import axios from "axios"

export default function Home() {


const [user, setUser] = useState('')

let submit = async (e) =>{
    e.preventDefault()

    try{

        alert("submitted")

        await axios.post("http://localhost:8000/", {
            user
        })
    }
    catch(e){
        console.log(e);
    }
}


return (
    <div className = 'cont'>
        
    <form action="POST">

    
        <textarea name = "text" onChange={(e)=>{setUser(e.target.value)}} placeholder = "enter text here" cols="30" rows="10"></textarea>
        <input type = "submit" onClick={submit} value = "Submit"/>

    </form>

    </div>
  )
}
