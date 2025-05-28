import Image from "next/image";
import data from "../data.json";

export default function Home() {
  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
}
