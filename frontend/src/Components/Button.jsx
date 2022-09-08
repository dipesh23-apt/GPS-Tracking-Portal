import React,{useState} from 'react'

function Button({asset_type}){
    if (asset_type ==="Person"){
        return (
            <button className="relative text-xs bg-violet-400 text-bg-violet-700 hover:bg-violet-300  font-bold py-1 px-6 rounded-full">
            {asset_type}
          </button>
        );
    }
    else if (asset_type ==="Vehicle") {
    return (
        <button className="relative text-xs bg-lime-400 text-bg-lime-700  hover:bg-lime-300  font-bold py-1 px-6 rounded-full">
        {asset_type}
      </button>
    );
     }
     else {
        return (
            <button className="relative text-xs bg-orange-400 text-bg-orange-700  hover:bg-orange-300  font-bold py-1 px-6 rounded-full">
            {asset_type}
          </button>
        );
         }
}
export default Button