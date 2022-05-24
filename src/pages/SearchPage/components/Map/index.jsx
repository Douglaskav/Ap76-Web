import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

export function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-5.1825468);
  const [lat, setLat] = useState(-37.352372);
  const [zoom, setZoom] = useState(15);

  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [lat, lng],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div className="w-[100%] h-[200px] md:w-[40%] md:h-[90vh] rounded">
      <div ref={mapContainer} className="map-container w-[100%] h-[100%]" />
    </div>
  );
}
