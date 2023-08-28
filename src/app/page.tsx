import moment from "moment-timezone";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("./components/Map"), {
  ssr: false,
  loading: () => <p className="text-white">Loading...</p>,
});
const Earthquakes = dynamic(() => import("./components/Earthquakes"), {
  ssr: false,
  loading: () => <p className="text-white">Loading...</p>,
});
import Title from "./components/Title";

export default async function Home() {
  const fetchEarthquake = async () => {
    const start = moment()
      .tz("Europe/Istanbul")
      .subtract(1, "days")
      .format("YYYY-MM-DD HH:mm:ss");
    const end = moment().tz("Europe/Istanbul").format("YYYY-MM-DD HH:mm:ss");

    const url = new URL("https://deprem.afad.gov.tr/apiv2/event/filter");

    url.searchParams.append("start", start);
    url.searchParams.append("end", end);
    url.searchParams.append("orderby", "timedesc");
    url.searchParams.append("minmag", "2");

    const response = await fetch(url.toString(), { cache: "no-cache" });
    const data = await response.json();
    return data;
  };

  const res = await fetchEarthquake();

  return (
    <main className="py-5 md:py-10 px-5 md:px-15 md:h-screen">
      <Title />
      <div className="flex flex-col md:flex-row md:h-5/6 w-full">
        <div className="w-full h-full">
          <Map datas={res} />
        </div>
        <Earthquakes datas={res} />
      </div>
    </main>
  );
}
