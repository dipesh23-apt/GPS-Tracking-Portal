import React from "react";
import ReactDOM from "react-dom";
import ReactMapboxGl,{Layer,Feature} from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";


const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZGFpbWsiLCJhIjoiY2ttbmt2dzc2MXZ1bjJwcGZsZndoaGdkbiJ9.KzEXKpaGb0yYkV8Npdg65g"
});

function Geofence() {
  const onDrawCreate = ({ features }) => {
    console.log(features);
    //console.log(features[0].geometry.coordinates);
    let k = features[0].geometry.coordinates;
    console.log(k[0]);
  };

  const onDrawUpdate = ({ features }) => {
    console.log(features);
  };

  return (
    <div className="absolute mt-20">
      <link href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css" rel="stylesheet"/>
     <Map
  style="mapbox://styles/mapbox/streets-v9"
  containerStyle={{
    height: '100vh',
    width: '100vw'
  }}
>
<DrawControl position={"top-left"} onDrawCreate={onDrawCreate} onDrawUpdate={onDrawUpdate}/>
  </Map>
    </div>
  );
}
export default Geofence

