import React, { useState } from 'react'
import LoginInputs from './components/LoginInputs'
import {AiFillCloseCircle} from 'react-icons/ai';
export default function Login({setToggleLogin}:{setToggleLogin: React.Dispatch<React.SetStateAction<boolean>>}) {
  const [email,setEmail] = useState<string>('');
  const [password,setPassword] = useState<string>('');
  const [emailError,setEmailError] = useState<string>('');
  const [passwordError,setPasswordError] = useState<string>('');
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault();
      if (!email) {
        setEmailError("Email is required");
        return;
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        setEmailError("Email is invalid");
        return;
      }
      if (!password) {
         setPasswordError("Password is required");
         return;
      } else if (password.length <= 5) {
        setPasswordError("Password length must be at least 6 characters");
        return;
      }
      if(emailError === '' && passwordError === ''){
        console.log(email,password); //login page data
      }
  }
  return (
    <div className='w-full h-screen flex justify-center items-center bg-gray-500 fixed z-50 inset-0 bg-opacity-50'>
        <div className='flex justify-around items-center w-full shadow'>
          <LoginInputs email={email} setEmail={setEmail} setPassword={setPassword} password={password} handleSubmit={handleSubmit} emailError={emailError} passwordError={passwordError} setEmailError={setEmailError} setPasswordError={setPasswordError}/>
        </div>
        <div className='absolute top-10 right-20'>
            <AiFillCloseCircle className='text-4xl  text-orange cursor-pointer hover:text-white' onClick={()=>setToggleLogin(false)}/>
        </div>
    </div>
  )
}