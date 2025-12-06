import { useShare } from './Hooks/Sharepropes'
const Successpage = () => {
  const { userName } = useShare();
  return (
    <div className=' bg-black text-white h-screen'>
      <div className=' py-50 flex items-center  w-full flex-col font-mono text-[15px] '>
        <p>✨Successfully Register </p>
        <p> your Tunnel Cloud Service 🐋</p>
        <p>{userName}, Accound is Active.</p>
        <p>  Take few Hourse ⌛</p>
      </div>
    </div>
  )
}

export default Successpage