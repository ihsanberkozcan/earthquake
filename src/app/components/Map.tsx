import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import L from "leaflet";
import { earthquakeDataType, responceType } from "../types/dataType";
import moment from "moment";
import { relativeDate } from "../utils/relativeDate";

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

export default function Map({ datas }: responceType) {
  return (
    <MapContainer
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
            <div className="flex">
              <div
                className={`p-3 mr-2 rounded-lg w-12 h-12 text-center align-middle text-white ${
                  parseFloat(data.magnitude) >= 5.0
                    ? "bg-red-500"
                    : parseFloat(data.magnitude) >= 4.0
                    ? "bg-orange-500"
                    : parseFloat(data.magnitude) >= 3.0
                    ? "bg-yellow-500"
                    : "bg-gray-700"
                }`}
              >
                {data.magnitude}
              </div>
              <div>
                <div>{data.location}</div>
                <div className="text-sm">Depth: {data.depth} KM </div>
                <div className="text-sm font-extralight">
                  {moment(data.date).format("LLL")}
                </div>
                <div className="text-sm font-extralight">
                  {relativeDate(data.date)}
                </div>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
