import React from "react";
import { earthquakeDataType } from "../types/dataType";
import moment from "moment";
import { relativeDate } from "../utils/relativeDate";
interface propsType {
  data: earthquakeDataType;
}

export default function Earthquake({ data }: propsType) {

  return (
    <div
      className={`w-full mt-3 p-4 rounded-lg shadow-lg text-white ${
        parseFloat(data.magnitude) >= 5.0
          ? "bg-red-600"
          : parseFloat(data.magnitude) >= 4.0
          ? "bg-orange-600"
          : parseFloat(data.magnitude) >= 3.0
          ? "bg-yellow-600"
          : "bg-gray-800"
      }`}
    >
      <div className="flex">
        <div
          className={`p-3 mr-2 rounded-lg w-12 h-12 text-center ${
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
          <div className="text-sm font-extralight">{moment(data.date).format("LLL")}</div>
          <div className="text-sm font-extralight">{relativeDate(data.date)}</div>
        </div>
      </div>
    </div>
  );
}
