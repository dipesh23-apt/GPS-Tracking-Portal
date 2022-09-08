
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Button from './Button'
import Paginate from './Paginate';
import {TrashIcon} from '@heroicons/react/solid'
import setGlobals from 'react-map-gl/dist/esm/utils/set-globals';

function Dashboard(){
  const options = {year: 'numeric', month: 'long', day: 'numeric',hour:'numeric',minute:'numeric' };
  const [loc,setLoc]=useState([])
  const [rowCount,setRowCount]=useState([])
  const [limit,setLimit]=useState(10)
  const [filter,setFilter]=useState()
  const [searchTerm,setSearchTerm]=useState('')
  const [offset,setOffset]=useState(0)
  const [alert,setAlert]=useState(false)
  const [all,setAll]=useState(true)
  useEffect(() => {
      setOffset(offset)
      getallPoints();
  }, []);
  
  const getallPoints=()=>{
    console.log("API CALL with following params")
    console.log(limit)
  console.log(offset)
  if ((offset<0)||(offset>rowCount)){
    setAlert(true)
  }else{
    setAlert(false)
  }
  const dict={}
  dict["limit"]=10
  dict["offset"]=offset 
  if (all===false){
    dict[filter]=searchTerm
    dict["limit"]=limit
    dict["offset"]=0
    console.log(dict)
  }
    axios.get('http://localhost:8000/api/v1/asset/all',{
      params:dict,
  })
      .then(res=>{
          setLoc(res.data.values.data);
          setRowCount(res.data.rowCount)   
      })
      .catch((error)=>{
        console.log(error);
        setOffset(0)
        setAlert(true)
      })
  }
  const showAlertness=()=>{
  if (alert===true){
    return (
      <div className=" fixed right-0 bottom-0 transition ease-in-out absolute p-4">
        <div class="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
            <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <div>
               <span class="font-medium">Reload again.</span> Something Went Wrong
            </div>
        </div>
      </div>
    );
  }
  if (alert===false)
    return(<></>);
}
  return(
    <div>
      {showAlertness()}
    <div className="flex flex-col rounded-md ml-20 m-8 md:ml-64 md:mr-8 lg:ml-64 bg-inherit">
      <div className="flex flex-row">
      <select class="block appearance-none mr-4 w-1/6 bg-white border border-gray-200 text-gray-700 py-1 px-4 pr-6 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" onChange={(e) => setFilter(e.target.value)}>
          <option>asset_id</option>
          <option>asset_type</option>
          <option>location</option>
        </select>
        <div class="flex relative w-20 lg:w-80 md:w-64 mr-20 h-10">
              <input class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-1 px-4 pr-6 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  id="search field" type="text" placeholder="Search" onChange={e=>{setSearchTerm(e.target.value);setAll(false); getallPoints();}}/>
            <div className="cursor-pointer p-1">
                <img width={40} src="/images/Reset.png" onClick={(e)=>{setAll(true);getallPoints();}}/>
            </div>
        </div>
        <div class="md:w-1/2 ml-80 pl-80 right">
      <a href="/create">
      <button class="shadow bg-indigo-700 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="button">
        + Create New Asset
      </button>
      </a>
    </div>
      </div>
    {/*header and Filter column flex*/}
    <div class="relative overflow-x-auto mt-4 w-full shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-800 dark:text-gray-400">
      <thead class="text-xs text-white  uppercase bg-indigo-600 dark:bg-gray-700 dark:text-gray-400">
        <tr>
        <th scope="col" class="px-6 py-3">Sno</th>
        <th scope="col" class="px-6 py-3">Asset-ID</th>
        <th scope="col" class="px-6 py-3">Asset Type</th>
        <th scope="col" class="px-6 py-3">Latitude</th>
        <th scope="col" class="px-6 py-3">Longitude</th>
        <th scope="col" class="px-6 py-3">TimeStamp</th>
        <th scope="col" class="px-6 py-3">Description</th>
        <th scope="col" class="px-6 py-3"></th>
        </tr>
      </thead>
      <tbody>
      {
          loc.map((asset,index)=>(
              <tr class="odd:bg-white even:bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-400 hover:text-white">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900  dark:text-white whitespace-nowrap">{index+1}</th>
                  <td class="px-6 py-3">{asset.asset_id}</td>
                  <td class="px-6 py-3"><Button asset_type={asset.asset_type}/></td>
                  <td class="px-6 py-3">{asset.lat}</td>
                  <td class="px-6 py-3">{asset.long}</td>
                  <td class="px-6 py-3">{new Date(asset.created_at*1000).toLocaleDateString(undefined,options)}</td>
                  <td class="px-6 py-3 italic">{asset.description}</td>
                  <td class="px-6 py-3"><TrashIcon className="h-6 cursor-pointer"/></td>
              </tr>
          ))
      }
      </tbody>
      </table>
      
    </div>
    <div className="flex-col p-4 ">
             <div className="inline-flex items-center py-2 px-4 text-sm font-medium 
            text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100
            hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 "
            onClick={()=>{setOffset(offset-limit);getallPoints();}}>
                    Previous
               </div>
        <div className="inline-flex items-center py-2 px-4 ml-3 text-sm font-medium 
        text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 
        hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
        onClick={()=>{setOffset(offset+limit);getallPoints();}}>
            Next
        </div>
    </div>
    
    </div>
    </div>
    );
}

export default Dashboard