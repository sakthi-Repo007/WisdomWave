"use client";
import Link from "next/link"
import Router, { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function SignIn() {
  const [user, userName] = useState("");
  const [pass, setPass] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();
  const handleUsernameChange = (e) => {
    userName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPass(e.target.value);
  };
  // const logIn = ()=>{
  //     if(user==='admin' && pass==='123'){
  //         alert("helo");
  //     }
  // }

  const handleSubmit = () => {
    // e.preventDefault();
    const name = JSON.parse(localStorage.getItem('users')) || {};
    // let a = name['users'];
    // console.log(a)
    if (name.hasOwnProperty(user) && name[user] === pass) {
      localStorage.setItem('username', user);
      localStorage.setItem('password', pass);
      router.push('/main')
    }
    else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div>


      <div className="grid justify-items-center mt-16">
        <form className="border border-slate-300 italic container w-fit h-[500px] !bg-white">

          <div>
            <h1 className="text-center text-3xl pt-6 text-black">Wisdom Wave</h1>
          </div>
          <div className="mt-9 ">
            <div className="flex justify-center ">
              {/* First-name */}
              <div className="flex flex-row justify-center gap-x-5 p-7" >
                <label htmlFor="first" className="mr-1 text-black">User Name :</label>
                <input className="indent-1 border border-slate-900 rounded-sm w-44" type="text" id="last" name="last" placeholder="First Name" value={user} onChange={handleUsernameChange} required />
              </div>
            </div>
            {/* Last-name */}
            <div className="flex flex-row justify-center gap-x-6 p-7">
              <label htmlFor="first" className="mr-2 text-black">Password :</label>
              <input className="indent-1 border border-slate-900 rounded-sm  w-44" type="password" id="last" name="last" placeholder="Password" value={pass} onChange={handlePasswordChange} required />
            </div>
            <div><p>{errorMessage && <p className="error">{errorMessage}</p>}</p> </div>
            <div className="flex justify-center flex-row gap-x-12 p-7">
              <button type="button" className="cursor-pointer border border-slate-900 rounded-sm h-12 w-44 text-green-600 relative" onClick={handleSubmit}>Log In</button>
            </div>
            <div className="p-7 text-center">
              <div>Dont have an account?<span> <Link href="/form" className="hover:underline text-red-500">Sign Up</Link></span>
              </div>
            </div>
          </div>


        </form>
      </div>
    </div>
  )
}