
import Earthquake from "./Earthquake";
import { EarthquakesType, earthquakeDataType } from "../types/dataType";

export default function Earthquakes({ datas,onEarthquakeClick }: EarthquakesType) {
  return (
    <div className="mt-5 md:mt-0 md:ml-5 h-full  w-full md:w-2/6 relative ">
      <h2 className="text-xl font-semibold text-white sticky top-0 bg-gray-800 p-2 rounded-lg shadow-lg text-center">
        Last Earthquakes
      </h2>
      <div className="h-full md:overflow-auto">
        {datas?.map((data: earthquakeDataType) => (
          <Earthquake key={data.eventID} data={data} onEarthquakeClick={onEarthquakeClick}/>
        ))}
      </div>
    </div>
  );
}
