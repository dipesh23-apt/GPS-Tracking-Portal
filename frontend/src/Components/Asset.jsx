import React,{useState,useEffect} from 'react'
import DefMap from './DefMap'
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function AssetView(){
  const [loc,setLoc]=useState([])
  const [startDate,setstartDate]=useState()
  const [endDate,setendDate]=useState()
  const[searchTerm,setSearchTerm]=useState()
  const [limitval,setLimit]=useState(10)
  const [filter,setFilter]=useState()
  const [alert,setAlert]=useState(false)
  const [rowCount,setRowCount]=useState([])
  useEffect(() => {
      getallPoints();
  }, []);
  const handleClick = () => {
   if (startDate>endDate){
       setAlert(true)
   }else{
       getallPoints()
   }
    console.log("Checkpoint passed")
   };
   const dict={}
   dict[filter]=searchTerm
   dict["limit"]=limitval
   dict["startDate"]=startDate
   dict["endDate"]=endDate
   dict["offset"]=0
   console.log(dict)
  const getallPoints=(filter,searchTerm,startDate,endDate,limitval)=>{
      axios.get('http://localhost:8000/api/v1/asset',{    
        params:dict, 
      })
      .then(res=>{
          setLoc(res.data.values.data);
          setAlert(false)
          setRowCount(res.data.rowCount)
      })
      .catch((error)=>{
        setAlert(true)
        console.log(error);
      })
  }
  const showAlertness=()=>{
    if (alert===true){
      return (
        <div className=" fixed right-0 bottom-0 transition ease-in-out absolute p-4">
          <div class="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
              <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              <div>
                 <span class="font-medium">Error !!</span> Please Check the Details 
              </div>
          </div>
        </div>
      );
    }
    if (alert===false)
      return(<></>);
  }
  console.log(filter)
  console.log(searchTerm)
  console.log(startDate)
  console.log(endDate)
  console.log(limitval)
  return(
     
    <div className="flex flex-col rounded-md lg:flex-row ml-20 m-8 md:ml-64 md:mr-8 lg:ml-64 bg-gray-200">
    {/*header and Filter column flex*/}
    {showAlertness()}
    <div className="flex flex-col w-full lg:w-1/2 "> 
    {/*Jumbotail header and title row flex */}
          <div className="flex w-full h-20 pl-10 pt-4 ">
              <img className="w-1/3 h-10"src="https://jumbotail.com/wp-content/uploads/2016/02/JumbotailLogo1.png"/>
              <h3 className="font-bold text-lg m-2 tracking-wide">Asset Tracking</h3>
          </div>
          <form class="w-full">
          
  <div class="md:flex md:items-center mb-6">
    <div class="ml-8 justify-between  mt-6 md:w-full flex flex-row h-10">
      <label class="flex block text-indigo-800 font-bold text-lg md:text-right mb-1 mt-1 md:mb-0 pr-8 " for="inline-full-name">
        Filter 
      </label>
      <div class="flex relative w-40 mr-20">
        <select class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-1 px-4 pr-6 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" onChange={(e) => setFilter(e.target.value)}>
          <option>asset_id</option>
          <option>asset_type</option>
          <option>location</option>
        </select>
      </div>
    </div>
  </div>
  <div class="flex justify-between md:items-center mb-8">
    <div class="ml-8 mt-2 md:w-full flex flex-row ">
      <label class="flex block text-indigo-800 font-bold text-lg md:text-right mb-1 md:mb-0 pr-8" for="inline-password">
        Search
      </label>
    </div>
    <div class="flex relative w-40 lg:w-80 md:w-64 mr-20 h-10">
      <input class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-1 px-4 pr-6 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  id="search field" type="text" placeholder="ADL0013" onChange={e=>setSearchTerm(e.target.value)}/>
    </div>
  </div>
  <div class="flex justify-between md:items-center mb-8">
    <div class="ml-8 mt-2 md:w-full flex flex-row ">
      <label class="flex block text-indigo-800 font-bold text-lg md:text-right mb-1 md:mb-0 pr-8" for="inline-password">
        From Date
      </label>
    </div>
    <div class="flex relative w-40 lg:w-80 md:w-64 mr-20 h-10">
      <input class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-1 px-4 pr-6 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  id="start-date" type="date" onChange={e=>setstartDate(Math.floor(new Date(e.target.value).getTime() / 1000))}/>
    </div>
  </div>
  <div class="flex justify-between md:items-center mb-8">
    <div class="ml-8 mt-2 md:w-full flex flex-row ">
      <label class="flex block text-indigo-800 font-bold text-lg md:text-right mb-1 md:mb-0 pr-8" for="inline-password">
        To Date
      </label>
    </div>
    <div class="flex relative w-40 lg:w-80 md:w-64 mr-20 h-10">
    <input class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-1 px-4 pr-6 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  id="end-date" type="date" onChange={e=>setendDate(Math.floor(new Date(e.target.value).getTime() / 1000))}/>
    </div>
  </div>

  <div class="md:flex md:items-center">
    <div class="md:w-1/2 p-4 mx-auto">
      <button class="shadow bg-indigo-700 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="button" onClick={handleClick}>
        Track Assets
      </button>
    </div>
    <label className="flex flex-row-reverse block text-gray-500 font-bold text-lg md:text-right mb-1 md:mb-0 mr-20" for="inline-password">
    <img src="/images/marker_icon.png"/>
    <input class="block appearance-none w-1/4 font-bold bg-gray-400 border border-gray-200 text-black py-1 px-2 pr-1 rounded leading-tight focus:outline-none focus:bg-gray-400 focus:border-gray-500"  id="limit" type="number"  placeholder="4" onChange={e=>setLimit(e.target.value)}/>
  </label>
  </div>
</form>
    </div>
    <div className="w-4/5 border-8 mx-auto border-white">
         <DefMap Value={loc}Zoom={5}/>           
    </div>
</div>
    )
}

export default AssetView