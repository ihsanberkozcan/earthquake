"use client";
import React, { useState } from "react";
import Title from "./Title";
import Earthquakes from "./Earthquakes";
import Map from "./Map";
import { responceType } from "../types/dataType";
export default function Content({ datas }: responceType) {
  const [selectedEarthquake, setSelectedEarthquake] = useState<number | null>(
    null
  );
  const handleEarthquakeClick = (earthquakeId: number) => {
    setSelectedEarthquake(earthquakeId);
  };

  return (
    <div className="py-5 md:py-10 px-5 md:px-15 md:h-screen">
      <Title />
      <div className="flex flex-col md:flex-row md:h-5/6 w-full">
        <div className="w-full h-full">
          <Map
            datas={datas}
            selectedEarthquake={selectedEarthquake}
            setSelectedEarthquake={setSelectedEarthquake}
          />
        </div>
        <Earthquakes datas={datas} onEarthquakeClick={handleEarthquakeClick} />
      </div>
    </div>
  );
}
