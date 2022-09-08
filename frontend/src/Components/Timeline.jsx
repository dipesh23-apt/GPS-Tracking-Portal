import React, { useState,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import DefMap from './DefMap'
import Button from './Button';

function Timeline(){
    const {req_id} = useParams();
    const [details,setDetails]=useState([])
    const [title,setTitle]=useState("")
    const [type,setType]=useState("")
    const options = {year: 'numeric', month: 'long', day: 'numeric',hour:'numeric',minute:'numeric' };
    useEffect(()=>{
        loadDetails();
     },[]);
    const loadDetails=()=>{
        console.log("Did it rech here")
        axios.get("http://localhost:8000/api/v1/asset/"+req_id)
        .then(response => {
            setDetails(response.data.values.data)
            setTitle(details[0].asset_id)
            setType(details[0].asset_type)});
    }
    
    console.log(title)
    return(
        <div className="flex flex-col rounded-md lg:flex-row ml-20 m-8 md:ml-64 md:mr-8 lg:ml-64 bg-white">
        {/*header and Filter column flex*/}
        <div className="flex flex-col w-full m-5 lg:w-1/2 "> 
        {/*Jumbotail header and title row flex */}
        <h1 className="mx-auto font-sans  text-3xl font-bold text-indigo-600 ">TimeLine View</h1>
        <div className="flex flex-row mt-4 ">
        
            <div className="flex">
            <h4 className="italic ml-16 py-4 text-3xl font-bold text-gray-600">Asset_id: </h4>
                <h2 className="italic mx-8 py-4 text-3xl font-bold text-red-600"> {req_id}</h2>
            </div>
            <div className="w-28">
            <img src="/images/truck.png"/>
            </div>
            {/*
            <div className="flex w-3/4 p-1 mt-3">
            <button className="text-lg my-2 bg-lime-400 text-bg-lime-700  hover:bg-lime-300  font-bold rounded-full">{`${type}`}
                    </button>
            </div>
    */}

        </div>
        {details.map((val)=>(
        <div className="m-2 mr-1 flex flex-row-reverse mr-10 ">
             <div class="block p-2 max-w-sm bg-gray-200 hover:-translate-x-20 transition ease-in-out rounded-lg border border-gray-200 shadow-md hover:bg-indigo-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 px-5 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{val.description}</h5>
                 <p class="font-normal px-4 text-gray-700 dark:text-gray-400">{val.lat} , {val.long}</p>
                <p class="font-normal px-4 text-red-600">{new Date(val.created_at*1000).toLocaleDateString(undefined,options)}</p>
            </div>
         </div>
        ))}
        </div>
        <div className="w-4/5 border-8 mx-auto border-white">
             <DefMap Value={details} Zoom={5}/>           
        </div>
    </div>
  )
}

export default Timeline