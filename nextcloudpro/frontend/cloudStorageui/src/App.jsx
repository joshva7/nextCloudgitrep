import { useState } from "react"
const App = () => {
  const [userName,setUserName]=useState("")
  const [userEmail,setUseremail]=useState("")
  const [userPassword,setUserpassword]=useState("")
  const UserCreated = (e) => {
    e.preventDefault();

    try {
      fetch("https://nextcloudgitrep.onrender.com/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userName,
          Email: userEmail,
          Password: userPassword
        }),
      }).then((res) => console.log(res))
    } catch (e) {
      console.log(e);
    }
    console.log(userName,userEmail,userPassword);    
  }
  return (
    <div className=' bg-black text-white h-screen'>
      <div className=' pt-10 flex flex-col items-center'>
        <p className='font-bold text-[1.5rem]'>Welcom to TunnelStorage</p>
        <p className='font-bold text-2xl'>Register</p>
      </div>
      <main>
        <form className=' mt-10 mx-10 flex flex-col gap-3' onSubmit={UserCreated}>
          <label>Name</label>
          <input type='text' onChange={(e)=>setUserName(e.target.value)} placeholder='Name' className=' border-2 outline-none rounded-[13px] ring-0 px-5 py-1 border-indigo-600' />
          <label>Email</label>
          <input type='text' onChange={(e)=>setUseremail(e.target.value)} placeholder='Email' className=' border-2 outline-none rounded-[13px] space-y-3 ring-0 px-5 py-1 border-indigo-600' />
          <label>Password</label>
          <input type='text' onChange={(e)=>setUserpassword(e.target.value)} placeholder='Password' className=' border-2 outline-none rounded-[13px]  ring-0 px-5 py-1 border-indigo-600' />
          <button className='w-full bg-indigo-700 rounded-full py-2 mt-10 text-white'>Register</button>
        </form>
      </main>
    </div>
  )
}

export default App