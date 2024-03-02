import React from "react";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";

function ResourceMap({ resources }) {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {resources.map((resource) => (
        <CircleMarker
          center={[resource.location.lat, resource.location.lng]}
          radius={20}
        >
          {/* Add a popup to display resource details */}
        </CircleMarker>
      ))}
    </MapContainer>
  );
}

export default ResourceMap;
