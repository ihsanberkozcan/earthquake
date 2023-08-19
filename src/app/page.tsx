"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Map = dynamic(()=> import("./components/Map"),{ssr: false , loading:()=> <p className="text-white">Loading...</p>});
const Earthquakes = dynamic(()=> import("./components/Earthquakes"),{ssr: false , loading:()=> <p className="text-white">Loading...</p>});
import Title from "./components/Title";
 
export default function Home() {
  const [datas, setDatas] = useState();
  useEffect(() => {
    fetchEarthquake();
  }, []);

  const fetchEarthquake = async () => {
    const res = await axios.get("/api/earthquake");
    setDatas(res.data.data);
  };

  return (
    <main className="py-5 md:py-10 px-5 md:px-15 md:h-screen">
      <Title />
      <div className="flex flex-col md:flex-row md:h-5/6 w-full">
        <div className="w-full h-full">
          <Map datas={datas} />
        </div>
        <Earthquakes datas={datas} />
      </div>
    </main>
  );
}
