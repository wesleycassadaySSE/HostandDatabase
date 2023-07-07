import React, { useState } from 'react'
import axios from "axios"

export default function Home() {


const [user, setUser] = useState('')
const [password, setPassword] = useState('')
const [email, setEmail] = useState('')

let submit = async (e) =>{
    e.preventDefault()

    try{

        alert("submitted")

        await axios.post("http://localhost:8000/", {
            user
            
        })
        await axios.post("http://localhost:8000/", {
            password
            
        })
        await axios.post("http://localhost:8000/", {
            email
            
        })


    }
    catch(e){
        console.log(e);
    }
}


return (
    <div className = 'cont'>
        
    <form action="POST">

    
        <textarea name = "text" onChange={(e)=>{setUser(e.target.value)}} placeholder = "User" cols="30" rows="10"></textarea>
        <textarea name = "text" onChange={(e)=>{setPassword(e.target.value)}} placeholder = "Pass" cols="30" rows="10"></textarea>
        <textarea name = "text" onChange={(e)=>{setEmail(e.target.value)}} placeholder = "Email" cols="30" rows="10"></textarea>
        
        <input type = "submit" onClick={submit} value = "Submit"/>

    </form>

    </div>
  )
}
