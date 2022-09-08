import MapboxDraw from '@mapbox/mapbox-gl-draw';
import Map, {useControl} from 'react-map-gl';

function DrawControl(props: DrawControlProps) {
  useControl(() => new MapboxDraw(props), {
    position: props.position
  });

  return null;
}

function App() {
  return (
    <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      mapStyle="mapbox://styles/mapbox/satellite-v9"
    >
      <DrawControl
        position="top-left"
        displayControlsDefault={false}
        controls={{
          polygon: true,
          trash: true
        }}
      />
    </Map>
  );
}