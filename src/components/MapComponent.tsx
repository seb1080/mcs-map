import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'

function MapComponent() {
mapboxgl.accessToken = "pk.eyJ1Ijoic2ViMTA4MCIsImEiOiJjbG9penZ2MnoxZm51MmlvM2g0NG9uYXR1In0.p5f8VHc1L7phGAsXEDeTbQ"

const mapContainer = useRef(null);
const map = useRef(null);
const [lng] = useState(-70.9);
const [lat] = useState(42.35);
const [zoom] = useState(9);

useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current as unknown as HTMLElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
  });

  return (
    <>
      <div>
      <div ref={mapContainer} className="map-container" />
      </div>
    </>
  )
}

export default MapComponent
