"use client";
import React, { useEffect, useState } from "react";
import Title from "./Title";
import Earthquakes from "./Earthquakes";
import Map from "./Map";
import { responceType } from "../types/dataType";
import toast, { Toaster } from 'react-hot-toast';
export default function Content({ datas, success }: responceType) {
  const [selectedEarthquake, setSelectedEarthquake] = useState<number | null>(
    null
  );
  const handleEarthquakeClick = (earthquakeId: number) => {
    setSelectedEarthquake(earthquakeId);
  };

  useEffect(() => {
    if (success === false) {
      toast.error('An unexpected error occurred. Please try again later.', {
        duration: 6000,
        position: 'top-center',
      }
      )
    }
  }, [success])

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
      <Toaster />
    </div>
  );
}
