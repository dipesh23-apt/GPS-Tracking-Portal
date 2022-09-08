import React,{useState,useEffect} from 'react'
import Map,{Marker, Popup} from 'react-map-gl';
import {LocationMarkerIcon,TruckIcon} from '@heroicons/react/solid'
import Button from './Button' 
import {
  Editor
} from "react-map-gl-draw";

function DefMap({Value,Zoom}) {
  const options = {year: 'numeric', month: 'long', day: 'numeric',hour:'numeric',minute:'numeric' };
  console.log(Value[0])
  const [viewState, setViewState] = React.useState({
    longitude: 79.9629,
    latitude:  23.5937,
    zoom: Zoom
  });
  const [currentPlace,setCurrentPlace]=useState(null)
  const handleMarkerClick=(id)=>{
    setCurrentPlace(id)
  }
  
  return (
    <div>
    <link href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css" rel="stylesheet"></link>
    <Map
    {...viewState}
    mapboxAccessToken={process.env.REACT_APP_MAPBOX}
    style={{height: 620}}
    onMove={evt => setViewState(evt.viewState)}
    mapStyle="mapbox://styles/mapbox/streets-v9"
  >
   {Value.map((asset) => (
          <div>
          <Marker
            key={asset.id}
            latitude={asset.lat}
            longitude={asset.long}
            offset={[0,-20]}
            anchor="top"
          >
           <button className="hover:fill-red-800 hover:scale-125">
             <LocationMarkerIcon  onClick={()=>handleMarkerClick(asset.id)} className="h-8 fill-red-600 "/>
             </button>
          </Marker>
          { asset.id===currentPlace && (
           <Popup longitude={asset.long} 
           latitude={asset.lat}
           anchor="left"
           offset={[20,0]}
           closeOnClick={false}
           onClose={()=>setCurrentPlace(null)}>
           <div className="w-64 h-52 rounded overflow-hidden">
              <div className="flex flex-row border-b-2 border-teal-500 justify-between">
                    {/*Id lablel and title one below other */}
                      <div className="flex flex-col p-1 ">
                        <label className="ml-1 text-sm pb-1 text-gray-500">Asset Id</label>
                        <h3 className="font-bold text-red-500 text-lg">{asset.asset_id}</h3>
                     </div>
                     <div className="flex flex-col p-1">
                         <label className="ml-1 text-sm pb-1 mr-8 text-gray-500">Asset type</label>
                        <div className="h-1/2 ">
                            <Button asset_type={asset.asset_type}/>
                        </div>
                      </div>
                </div>
                <div className="flex flex-row w-full mt-1">
                  <img className="pt-2 h-1/2" src="/images/marker_icon.png"/>
                  <div className="flex flex-col  justify-between">
                        <label className="ml-1 text-sm text-gray-500">Co-ordinates</label>
                        <h3 className="my-auto mx-auto font-bold text-red-500 text-lg">{asset.lat+"   ° N"}</h3>
                        <h3 className="my-auto mx-auto font-bold text-red-500 text-lg">{asset.long+"  ° E"}</h3>
                     </div>
                     </div>
                  <div className="flex flex-col h-full ">
                        <h5 className="font-bold m-1 bg-gray-200 border-4 text-black-500 text-sm">{asset.description}</h5>
                        <div className="flex flex-row">
                          <img className="h-8" src="/images/Time.png"/> 
                          <h6 className="p-2">{new Date(asset.created_at*1000).toLocaleDateString(undefined,options)}</h6> 
                          <a href={`/timeline/${asset.asset_id}`}><TruckIcon className="flex-row-reverse ml-12 h-6 hover:scale-125 hover:fill-red-600"/></a>
                        </div>
                     </div>

           </div>
         </Popup>
          )}
         </div>
        ))
        }
   
    </Map>
    </div>
    );
  
}
export default DefMap