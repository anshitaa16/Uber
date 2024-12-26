import React, { useState } from 'react'
import image2 from '../assets/img/logo_black.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/userContext'



const UserSignup = () => {


  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [userData, setuserData] = useState({})

  const navigate = useNavigate()


  const {user, setUser} = React.useContext(UserDataContext)
  
  const submitHandler= async (e) =>{
    e.preventDefault();
    const newUser = {
      fullname:{
        firstname:firstName,
        lastname:lastName
      },
      email:email,
      password:password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    
    if(response.status === 201 ){
      const data = response.data
      setUser(data.user)
      navigate('/home')
    }
  
    setemail('')
    setpassword('')
    setfirstName('')
    setlastName('')
  }

  return (
    <div className='w-screen flex justify-center items-center'>
      <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
          <img className='w-16 mb-10' src={image2} alt="" />
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>

            <h3 className='text-base text-center font-medium mb-2'>What's your name</h3>

            <div className='flex gap-4 mb-5'>
            <input
              required
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-base placeholder:text-sm'
              type="text"
              placeholder="first name"
            />

            <input
              required
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm'
              type="text"
              placeholder="last name"
            />
            </div>




            <h3 className='text-base text-center font-medium mb-5'>What's your email</h3>

            <input
              required
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
              type="email"
              placeholder="email@example.com"
            />

            <h3 className='text-base text-center font-medium mb-5'>What's your password</h3>

            <input
              className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm'

              required
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              name="password"
              placeholder="********"
            />

            <button
              className='bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2 w-full text-base placeholder:text-base'
            >Create Account</button>


          </form>
          <p className='text-center'>Already have a account? <Link to="/login" className='text-blue-600'>Login</Link></p>
        </div>
        <div>
         <p className='text-[8px] leading-tight'>
          This site is protected by reCAPTCHA and the Google <a href="" className='underline'>Privacy Policy</a> and <a href="" className='underline'>Terms of Service</a> apply.
         </p>
        </div>
      </div>
    </div>
  )
}

export default UserSignup