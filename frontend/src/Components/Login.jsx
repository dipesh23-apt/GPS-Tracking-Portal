
import React,{useState}  from 'react'
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export function saveTokentoLocalStorage(tokenDetails){
    localStorage.setItem('UserDetails',JSON.stringify(tokenDetails));
}
function Login(){
    const [username,setusername]=useState('')
    const [password,setpassword]=useState('')
    const [logged_in,setLoggedin]=useState(false)

    const submitfortoken=async()=>{
        axios.post('http://localhost:8000/accounts/api/token/',{"username":username,"password":password}).then((response)=> {
            saveTokentoLocalStorage(response.data)
            setLoggedin(true);
            console.log(logged_in)
            })
            .catch(function(error) {
            console.log(error);
            console.log(logged_in)
            setLoggedin(false);
            });
            
    }
    if (logged_in)
         return (<Navigate to="/asset" replace={true} />);

    return(
    <div className="flex flex-row absolute h-screen">   
    <div className="flex shadow-xl z-50">
            <img width={900} src="/images/left-bg.jpg"/>
    </div> 
    <div className="grid grid-col-1 p-60 bg-white">
    <div className="flex ">
             <img className="w-1/3 h-10"src="https://jumbotail.com/wp-content/uploads/2016/02/JumbotailLogo1.png"/>
    </div> 
    <div class="flex flex-col md:items-left  ml-4 ">
    <div class=" mt-2 p-2">
      <label class="block text-gray-700 text-lg font-bold mb-2" for="username">
        Username
      </label>
    </div>
    <div class="flex relative w-40  md:w-64 mr-20 h-10">
      <input class="block shadow-md bg-gray-200 w-full bg-white border border-gray-200 
      text-gray-700 py-1 px-4 rounded leading-tight focus:outline-none 
      focus:bg-white focus:border-gray-500"  id="assetId" 
      onChange={e=>setusername(e.target.value)} type="text" placeholder="user@xyz.com"/>
    </div>
  </div>
  <div class="flex flex-col md:items-left ml-4 ">
    <div class="ml- mt-2 p-2">
      <label class="block text-gray-700 text-lg font-bold mb-2" for="username">
        Password
      </label>
    </div>
    <div class="flex relative  md:w-64 mr-20 h-10">
      <input class="block  bg-gray-200 shadow-md w-full bg-white border border-gray-200
       text-gray-700 py-1 px-4 pr-6 rounded leading-tight focus:outline-none
        focus:bg-white focus:border-gray-500"  id="assetType"
        onChange={e=>setpassword(e.target.value)} type="password" placeholder="*******"/>
    </div>
  </div>
  
    <div class="flex mt-5">
    <button className="relative text-md bg-indigo-800 ml-4 text-white hover:bg-indigo-500  
    font-bold py-2 px-8 rounded-sm " onClick={submitfortoken} >
            Login
          </button>
    </div>
  </div>
    
  </div>
        
    )
}
export default Login