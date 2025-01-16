import { AiOutlineWhatsApp } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { FaBluesky } from "react-icons/fa6";
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
        `https://api.whatsapp.com/send?text=${location}%0AMagnitude: ${magnitude}%0ADepth: ${depth}%0A${localdate}%0A${relativedate}%0Ahttps://lastearthquakes.ihsanberkozcan.com`,
        "_blank"
      );
    } else if (app == "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?text=${location}%0AMagnitude: ${magnitude}%0ADepth: ${depth}%0A${localdate}%0A${relativedate}%0Ahttps://lastearthquakes.ihsanberkozcan.com`,
        "_blank"
      );
    } else if (app == "blusky") {
      window.open(
        `https://bsky.app/intent/compose?text=${location}%0AMagnitude: ${magnitude}%0ADepth: ${depth}%0A${localdate}%0A${relativedate}%0Ahttps://lastearthquakes.ihsanberkozcan.com`,
        "_blank"
      );
    }
  };
  return (
    <div>
      <button onClick={() => share("twitter")} className="m-0.5 p-1 mr-1">
        <RiTwitterXLine className="w-5 h-5" />
      </button>
      <button onClick={() => share("whatsapp")} className="m-0.5 p-1">
        <AiOutlineWhatsApp className="w-5 h-5" />
      </button>
      <button onClick={() => share("blusky")} className="m-0.5 p-1">
        <FaBluesky className="w-5 h-5" />
      </button>
    </div>
  );
}
