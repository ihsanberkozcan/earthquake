import moment from "moment-timezone";
import dynamic from "next/dynamic";
const Content = dynamic(() => import("./components/Content"), {
  ssr: false,
  loading: () => <p className="text-white">Loading...</p>,
});

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
    <main>
      <Content datas={res}/>
    </main>
  );
}
