import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Userlogin() {
    const[email,setEmail]=useState('')
    const[pass,setPass]=useState('')
    const[userData,setUserData]=useState({})

    const submitHandler=(e)=>{
        e.preventDefault();
        setUserData({
          email:email,
          pass:pass
        })
        console.log(userData)
        setEmail('')
        setPass('')
        
    }
  return (
    <div className='h-screen p-7 flex flex-col justify-between'>
       <div>
       <img className='w-16 mb-7' src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt="" />
       <form onSubmit={submitHandler}>
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className='bg-[rgb(238,238,236)] mb-7 rounded px-4 border w-full placeholder:text-sm text-lg  py-2 '
        type="email"
        placeholder="email@example.com"
        required
          />
        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
        <input type="password"
        value={pass}
        onChange={(e)=>{
            setPass(e.target.value)
        }}
        className='bg-[rgb(238,238,236)] mb-7 rounded px-4 border w-full placeholder:text-sm text-lg  py-2 '
        placeholder="password"
         />
        <button
        className='bg-[#111] cursor-pointer text-white mb-7 rounded px-4 border w-full placeholder:text-sm text-lg  py-2 '
        >Login</button>
        </form>
        <p className='text-center mb-5'>New Here ?<Link to='/signup' className='text-blue-600 cursor-pointer'>Create new Account</Link>
        </p>

       </div>
       <div>
        <Link to='/captain-login' className=' cursor-pointer bg-[#10b461]  text-white flex items-center justify-center mb-7 rounded px-4 border w-full placeholder:text-sm text-lg  py-2 '
        >Sign in as Captain</Link>
       </div>
    </div>
  )
}

export default Userlogin