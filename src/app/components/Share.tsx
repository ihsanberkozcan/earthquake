import { AiOutlineWhatsApp } from "react-icons/ai";
import { localDate } from "../utils/localDate";
import { relativeDate } from "../utils/relativeDate";
import { earthquakeDataType } from "../types/dataType";

interface propsType {
  data: earthquakeDataType;
}
export default function Share({ data }: propsType) {
  const share = (app: string) => {
    const location = data.location;
    const magnitude = data.magnitude;
    const depth = data.depth;
    const localdate = localDate(data.date);
    const relativedate = relativeDate(data.date);

    if (app == "whatsapp") {
      window.open(
        `https://api.whatsapp.com/send?text=${location}%0AMagnitude: ${magnitude}%0ADepth: ${depth}%0A${localdate}%0A${relativedate}%0Ahttps://lastearthquakes.vercel.app/`,
        "_blank"
      );
    }
  };
  return (
    <div>
      <button onClick={() => share("whatsapp")}>
        <AiOutlineWhatsApp className="w-5 h-5" />
      </button>
    </div>
  );
}
