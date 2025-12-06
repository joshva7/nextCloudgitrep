import { useContext, createContext, useState } from "react"
const useSharepro = createContext();
export const Sharepropes = ({ children  }) => {
  const [userName, setUsername] = useState("");
  return (
    <useSharepro.Provider value={{ userName, setUsername }}>{children }</useSharepro.Provider>
  )
}
export const useShare=()=>{
  const content=useContext(useSharepro)
  if(!content){
    throw new Error("useshare must be used inside ShareProvider")
  }
return content;
}