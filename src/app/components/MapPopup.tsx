import React from "react";
import { localDate } from "../utils/localDate";
import { relativeDate } from "../utils/relativeDate";
import Share from "./Share";
import { earthquakeDataType } from "../types/dataType";

interface propsType {
  data: earthquakeDataType;
}
export default function MapPopup({ data }: propsType) {
  return (
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
        <div className="text-sm font-extralight">
          <div>{data.location}</div>
          <div>Depth: {data.depth} KM </div>
          <div>{localDate(data.date)}</div>
          <div>{relativeDate(data.date)}</div>
        </div>

        <div className="my-1.5 h-px bg-gray-700"></div>
        <div>
          <Share data={data} />
        </div>
      </div>
    </div>
  );
}
