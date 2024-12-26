import React, { useState } from 'react'
import image2 from '../assets/img/logo_black.png'
import { Link } from 'react-router-dom'


const UserLogin = () => {
     
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [userData, setuserData] = useState({})

     const submitHandler = (e) => {
          e.preventDefault()
          setuserData({
               email: email,
               password: password
          })
          console.log(userData)
          setEmail('')
          setPassword('')
     }

     
  return (
    <div className='flex justify-center items-center w-screen'>
     <div className='p-7 h-screen flex flex-col justify-between'>
    <div>  
    <img className='w-16 mb-10' src={image2} alt="" />
     <form onSubmit={(e)=>{
          submitHandler(e)
     }}>
          <h3 className='text-lg text-center font-medium mb-2'>What's your email</h3>

          <input 
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
          type="email" 
          placeholder="email@example.com" 
          />

          <h3 className='text-lg text-center font-medium mb-2'>What's your password</h3>

          <input 
          className='bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          type="password" 
          name="password" 
          placeholder="********" 
          />

          <button 
          className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
          >Login</button>


     </form>
          <p className='text-center'>New here? <Link to="/signup" className='text-blue-600'>Create new Account</Link></p>
    </div>
    <div>
     <Link to="/captain-login" className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
    </div>
    </div>
    </div>
  )
}

export default UserLogin