import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'
import { config } from '../configs/config';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN

const START_COORDINATE = { lng: -74.6168176, lat: 46.0209515 }

function MapComponent() {
const mapContainer = useRef(null);
const map = useRef<mapboxgl.Map | unknown>(null);
const [lng] = useState(START_COORDINATE.lng);
const [lat] = useState(START_COORDINATE.lat);
const [zoom] = useState(config.map.zoom);

useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current as unknown as HTMLElement,
      style: config.map.style,
      center: [lng, lat],
      zoom: zoom
    });
  });

  return (
    <>
      <div className='map'>
      <div ref={mapContainer} className="map-container" />
      </div>
    </>
  )
}

export default MapComponent
