import React from 'react'

function Sidebar(){
  return(
    <div class=" w-12 h-full md:w-60 shadow-md bg-white pt-4 pb-12 absolute">
  <ul className="relative flex flex-col ">
  <li class="relative">
      <a class="flex items-center  py-4 px-2 md:px-6 text-sm font-bold italic h-21  hover:text-gray-900 hover:bg-blue-100" href="/dashboard">
        <img className="w-8 h-8"src="/images/dashboard.png"/>
        <h3 className="invisible md:visible ml-1 ">Dashboard View</h3> 
            </a>
    </li>
    <li class="relative">
      <a class="flex items-center  py-4 px-2 md:px-6 text-sm font-bold italic h-21  hover:text-gray-900 hover:bg-blue-100  " href="/asset">
        <img className="w-8 h-8"src="/images/asset_tracking.png"/>
        <h3 className="invisible md:visible ml-1">Asset-Tracking View</h3> 
            </a>
    </li>
    <li class="relative">
      <a class="flex items-center  py-4 px-2 md:px-6 text-sm font-bold italic h-21  hover:text-gray-900 hover:bg-blue-100  " href="timeline">
        <img className="w-8 h-8"src="/images/timeline.png"/>
        <h3 className="invisible md:visible ml-1">Timeline View</h3> 
            </a>
    </li>
  </ul>
    <ul className="relative flex flex-col-reverse">
    <li class="relative">
      <a class="flex items-center py-4 px-2 md:px-6 text-sm font-bold italic h-21  hover:text-gray-900 hover:bg-blue-100 " href="/login">
        <img className="w-8 h-8"src="/images/Logout.png"/>
        <h3 className="invisible md:visible ml-1 hover:">Logout</h3> 
            </a>
    </li>
    <li class="relative">
      <a class="flex items-center py-4 px-2 md:px-6 text-sm font-bold italic h-21  hover:text-gray-900 hover:bg-blue-100 " href="#!">
        <img className="w-8 h-8"src="/images/Settings.png"/>
        <h3 className="invisible md:visible ml-1 hover:">Settings</h3> 
            </a>
    </li>
    </ul>
</div>
    )
}

export default Sidebar