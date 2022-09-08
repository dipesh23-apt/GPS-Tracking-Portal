import React,{useState} from 'react'

function FilterForm({props}){
    const [startDate,setstartDate]=useState()
    const [endDate,setendDate]=useState()
    const [limitval,setLimit]=useState(10)
    
    const handleClick = () => {
      props.passData({name: 'Joe Smith'});
  };
  return(

      <div>
          <form class="w-full">
          
  <div class="md:flex md:items-center mb-6">
    <div class="ml-8 justify-between  mt-6 md:w-full flex flex-row h-10">
      <label class="flex block text-indigo-800 font-bold text-lg md:text-right mb-1 mt-1 md:mb-0 pr-8 " for="inline-full-name">
        Filter 
      </label>
      <div class="flex relative w-40 mr-20">
        <select class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-1 px-4 pr-6 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" >
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
      <input class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-1 px-4 pr-6 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  id="search field" type="text" placeholder="ADL0013"/>
    </div>
  </div>
  <div class="flex justify-between md:items-center mb-8">
    <div class="ml-8 mt-2 md:w-full flex flex-row ">
      <label class="flex block text-indigo-800 font-bold text-lg md:text-right mb-1 md:mb-0 pr-8" for="inline-password">
        From Date
      </label>
    </div>
    <div class="flex relative w-40 lg:w-80 md:w-64 mr-20 h-10">
      <input class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-1 px-4 pr-6 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  id="start-date" type="date" onChange={e=>setstartDate(e.target.value)}/>
    </div>
  </div>
  <div class="flex justify-between md:items-center mb-8">
    <div class="ml-8 mt-2 md:w-full flex flex-row ">
      <label class="flex block text-indigo-800 font-bold text-lg md:text-right mb-1 md:mb-0 pr-8" for="inline-password">
        To Date
      </label>
    </div>
    <div class="flex relative w-40 lg:w-80 md:w-64 mr-20 h-10">
    <input class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-1 px-4 pr-6 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  id="end-date" type="date" onChange={e=>setendDate(e.target.value)}/>
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
    )
}

export default FilterForm
