import React, { useEffect, useState } from "react";
import AllSurrahCard from "./components/AllSurrahCard";
import useSWR from "swr";
import Link from "next/link";
const URL = `/api/all-surrahs`;
const fetcher = async () => {
  const fetcher = await fetch("https://api.quran.com/api/v4/chapters");
  const data = fetcher.json();
  return data;
};
function AllSurrah() {
  // const [isLoading, setIsLoading] = useState(false);
  const { data, isLoading } = useSWR("data", fetcher);
  console.log(data);
  return (
    <section className="py-4 px-10 grid grid-cols-12 gap-4">
      {data &&
        data.chapters.map((d) => (
          <Link href={`/all-surrahs/${d.id}`} className="col-span-3" key={d.id}>
            <li className="list-none ">
              <AllSurrahCard
                name={d.name_complex}
                arabicName={d.name_arabic}
                revelationPlace={d.revelation_place}
                verses={d.verses_count}
                nameMeaning={d.translated_name.name}
              />{" "}
            </li>
          </Link>
        ))}
    </section>
  );
}

export default AllSurrah;
