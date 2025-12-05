import { useState } from "react"
const App = () => {
  const formfiled = useState({
    name: "", email: "", password: ""
  })
  const UserCreated = (e) => {
    e.preventDefault();

    try {
      fetch("https://nextcloudgitrep.onrender.com/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name,
          Email: email,
          Password: password
        }),
      }).then((res) => console.log(res))
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className=' bg-black text-white h-screen'>
      <div className=' pt-10 flex flex-col items-center'>
        <p className='font-bold text-[1.5rem]'>Welcom to TunnelStorage</p>
        <p className='font-bold text-2xl'>Register</p>
      </div>
      <main>
        <form className=' mt-10 mx-10 flex flex-col gap-5' onSubmit={UserCreated}>
          <input type='text' placeholder='Name' className=' border-2 outline-none rounded-[13px] ring-0 px-5 py-1 border-indigo-600' />
          <input type='text' placeholder='Email' className=' border-2 outline-none rounded-[13px] space-y-3 ring-0 px-5 py-1 border-indigo-600' />
          <input type='text' placeholder='Password' className=' border-2 outline-none rounded-[13px]  ring-0 px-5 py-1 border-indigo-600' />
          <button className='w-full bg-indigo-700 rounded-full py-2 mt-10 text-white' >Register</button>
        </form>
      </main>
    </div>
  )
}

export default App