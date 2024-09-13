import React from 'react'
import { useAuth } from '../context/Authprovider'
import toast from 'react-hot-toast'

function Logout() {

    const [authUser,setAuthuser]=useAuth()
    const handleLogout = ()=>{
try{
setAuthuser({
    ...authUser,
    user:null
})
localStorage.removeItem("Users")
toast.success("Logout succesfull")
window.location.reload();
}
catch(error){
    toast.error("Error" + error.message)
}        
    }
  return (
    <div>
      <button className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
      onClick={handleLogout}
      >Logout</button>
    </div>
  )
}

export default Logout
