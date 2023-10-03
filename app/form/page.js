"use client";
import Link from "next/link";
import { useState } from "react";
import Router, { useRouter } from "next/navigation";
export default function Form() {
  const [user,userName] = useState("");
  const [pass,setPass] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();
  const handleUsernameChange = (e) => {
    userName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPass(e.target.value);
  };
  const handleSignup = () => {
    // e.preventDefault();

    // Read existing user data from localStorage abcd
    const usersData = JSON.parse(localStorage.getItem('users')) || {};

    // Check if the username already exists
    if (usersData.hasOwnProperty(user)) {
      setErrorMessage('Username already exists');
    }

    // Add the new user to the data
    usersData[user] = pass;

    // Update localStorage with the new user data
    localStorage.setItem('users', JSON.stringify(usersData));

    setErrorMessage('');
    router.push('/');
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const name = JSON.parse(localStorage.getItem('users')) || {};
//     // let a = name['users'];
//     // console.log(a)
//     if(name.hasOwnProperty(user)&&name[user]===pass)
//     {
//       localStorage.setItem('username', user);
//       router.push('/')
//     }
//     else{e
//       setErrorMessage('Invalid username or password');
//     }
// };

  // const toggleSignup = () => {
  //   setIsSignup(!isSignup);
  //   userName('');
  //   pass('');
  //   setErrorMessage('');
  // };

  return (
    <div>
      
    
    <div className="grid justify-items-center mt-16 "> 
    <form className="border border-slate-300 italic container w-fit h-[500px] bg-white">
      
        <div>
          <h1 className="text-center text-3xl pt-6">Wisdom Wave</h1>
        </div>
        <div className="mt-9 ">
       <div className= "flex justify-center ">
            {/* First-name */}
            <div className= "flex flex-row justify-center gap-x-5 p-7" >
              <label htmlFor="first" className="mr-1 text-black">First Name :</label>
              <input className="indent-1 border border-slate-900 rounded-sm w-44" type="text" id="last" name="last" placeholder="First Name" value={user} onChange={handleUsernameChange} required />
            </div>
            </div>
            <div className= "flex justify-center ">
            {/* First-name */}
            <div className= "flex flex-row justify-center gap-x-5 p-7" >
              <label htmlFor="first" className="mr-1 text-black">Last Name :</label>
              <input className="indent-1 border border-slate-900 rounded-sm w-44" type="text" id="last" name="last" placeholder="First Name" required />
            </div>
            </div>
            
            {/* Last-name */}
            <div className="flex flex-row justify-center gap-x-6 p-7">
              <label htmlFor="first" className="mr-2 text-black">Password :</label>
              <input className="indent-1 border border-slate-900 rounded-sm  w-44" type="password" id="last" name="last" placeholder="Password" value={pass
              } onChange={handlePasswordChange} required />
            </div>
            <div className="flex justify-center flex-row gap-x-12 p-7">
            <button type="button" className="cursor-pointer border border-slate-900 rounded-sm h-12 w-44 text-green-600 relative "  onClick={handleSignup}>Sign Up</button>
            </div>
            <div className="p-4 text-center">
            <div>Already have an account?<span> <Link href="/"className="hover:underline text-red-500">Log In</Link></span> 
            </div>
            </div>
            </div>
           
          
    </form>
    </div>
    </div>
  )
}