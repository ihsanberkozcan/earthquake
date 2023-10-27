"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import L from "leaflet";
import { earthquakeDataType, MapType } from "../types/dataType";

import MapPopup from "./MapPopup";
import { useEffect, useRef } from "react";

const redIcon = L.icon({
  iconUrl: "redIcon.png",
  iconSize: [10, 10],
});
const orangeIcon = L.icon({
  iconUrl: "orange.png",
  iconSize: [10, 10],
});
const yellowIcon = L.icon({
  iconUrl: "yellow.png",
  iconSize: [10, 10],
});
const Icon = L.icon({
  iconUrl: "icon.png",
  iconSize: [10, 10],
});

export default function Map({
  datas,
  selectedEarthquake,
  setSelectedEarthquake,
}: MapType) {
  const mapRef = useRef(null);
  const markerRefs = useRef<{ [key: string]: any }>({});

  useEffect(() => {
    markerRefs.current = {};
    datas.forEach((data) => {
      markerRefs.current[data.eventID] =
        markerRefs.current[data.eventID] || null;
    });
  }, [datas]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) {
      return;
    }
    const marker = markerRefs.current[selectedEarthquake!];
    if (marker) {
      marker.openPopup();
      setSelectedEarthquake(null);
    }
  }, [selectedEarthquake]);

  return (
    <MapContainer
      ref={mapRef}
      center={{ lat: 39, lng: 35 }}
      zoom={6}
      style={{ minHeight: "300px", height: "100%", width: "100%" }}
      className="rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {datas?.map((data: earthquakeDataType, index) => (
        <Marker
          ref={(marker) => {
            markerRefs.current[data.eventID] = marker;
          }}
          key={index}
          position={{
            lat: parseFloat(data.latitude),
            lng: parseFloat(data.longitude),
          }}
          icon={
            parseFloat(data.magnitude) >= 5.0
              ? redIcon
              : parseFloat(data.magnitude) >= 4.0
              ? orangeIcon
              : parseFloat(data.magnitude) >= 3.0
              ? yellowIcon
              : Icon
          }
        >
          <Popup>
            <MapPopup data={data} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
