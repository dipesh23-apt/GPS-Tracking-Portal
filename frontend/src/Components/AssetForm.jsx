import axios from 'axios'
import React,{useState} from 'react'

function AssetForm(){
    const [assetID,setAssetID]=useState()
    const [assetType,setAssetType]=useState()
    const [lat,setLat]=useState(26.5)
    const [long,setLong]=useState(79.65)
    const [description,setDescription]=useState()
    console.log(assetID,assetType)
    const insertNewRecord=async()=>{
        axios.post('http://localhost:8000/api/v1/asset',{
            "asset_id":assetID,
            "asset_type":assetType,
            "description":description,
            "latitude":lat,
            "longitude":long,
        }).then((response)=>{
            console.log(response)
        }).catch(function(error) {
        console.log(error);
        });
    }
return (
<div className="grid grid-col-1 lg:grid-cols-2 rounded-xl lg:flex-row lg:mr-32 lg:ml-72 p-8 m-8 md:ml-64 md:mr-8  bg-gray-300">
    <div className="grid grid-col-1 ">
    <div class="flex flex-col md:items-left ml-4  ">
    <div class=" mt-2 p-2">
      <label class="block text-gray-700 text-md font-bold mb-2" for="username">
        Asset ID
      </label>
    </div>
    <div class="flex relative w-40  lg:w-3/4 md:w-64 mr-20 h-10">
      <input class="block shadow-md w-full bg-white border border-gray-200 
      text-gray-700 py-1 px-4 pr-6 rounded leading-tight focus:outline-none 
      focus:bg-white focus:border-gray-500"  id="assetId" 
      onChange={e=>setAssetID(e.target.value)} type="text" placeholder="ADL0013"/>
    </div>
  </div>
  <div class="flex flex-col md:items-left ml-4 ">
    <div class="ml- mt-2 p-2">
      <label class="block text-gray-700 text-md font-bold mb-2" for="username">
        Asset Type
      </label>
    </div>
    <div class="flex relative w-40  lg:w-3/4 md:w-64 mr-20 h-10">
      <input class="block shadow-md w-full bg-white border border-gray-200
       text-gray-700 py-1 px-4 pr-6 rounded leading-tight focus:outline-none
        focus:bg-white focus:border-gray-500"  id="assetType"
        onChange={e=>setAssetType(e.target.value)} type="text" placeholder="Vehicle"/>
    </div>
  </div>
  <div class="flex flex-col md:items-left ml-4">
    <div class="ml- mt-2 p-2">
      <label class="block text-gray-700 text-md font-bold mb-2" for="username">
        Latitude
      </label>
    </div>
    <div class="flex relative w-40  lg:w-3/4 md:w-64 mr-20 h-10">
      <input class="block shadow-md w-full bg-white border border-gray-200 
      text-gray-700 py-1 px-4 pr-6 rounded leading-tight focus:outline-none
       focus:bg-white focus:border-gray-500"  id="latitude" 
       onChange={e=>setLat(e.target.value)}type="text" placeholder="26.809"/>
    </div>
  </div>
  <div class="flex flex-col md:items-left ml-4">
    <div class="ml- mt-2 p-2">
      <label class="block text-gray-700 text-md font-bold mb-2" for="username">
        Longitude
      </label>
    </div>
    <div class="flex relative w-40  lg:w-3/4 md:w-64 mr-20 h-10">
      <input class="block shadow-md w-full bg-white border border-gray-200 
      text-gray-700 py-1 px-4 pr-6 rounded leading-tight focus:outline-none
       focus:bg-white focus:border-gray-500"  id="longitude" 
       onChange={e=>setLong(e.target.value)}type="text" placeholder="86.0124"/>
    </div>
  </div>
  <div class="flex flex-col md:items-left ml-4 mb-8 ">
    <div class="ml- mt-2 p-2">
      <label class="block text-gray-700 text-md font-bold mb-2" for="username">
        Description
      </label>
    </div>
    <div class="flex relative w-40 lg:w-3/4 md:w-60 mr-20 h-20">
      <textarea class="shadow-md w-full bg-white border border-gray-200
       text-gray-700 py-1 px-4 pr-6 rounded leading-tight focus:outline-none
        focus:bg-white focus:border-gray-500"  id="search field" type="text"
        onChange={e=>setDescription(e.target.value)} placeholder="Enter the description of the asset"/>
    </div>
    <div class="flex mt-5">
    <button className="relative text-md bg-indigo-800 text-white hover:bg-indigo-500  
    font-bold py-2 px-6 rounded-sm "  onClick={insertNewRecord} >
            Create New Record
          </button>
    </div>
  </div>
  
    </div>
    <div className="grid invisiblelg:visible">
        <h1 className="mx-auto font-sans text-3xl font-bold text-indigo-600 ">Asset Update Portal</h1>
        <img className=" p-5"src="/images/rafiki.png"/>
    </div>
</div> 
);
}
export default AssetForm