import React from "react";

function AllSurrahCard(props) {
  const { name, arabicName, revelationPlace, verses, nameMeaning } = props;
  return (
    <div className=" p-4 bg-white text-gray-700 shadow-lg border-2 rounded-md font-semibold">
      <h1 className="text-2xl text-teal-400 text-center my-2">{nameMeaning}</h1>
      <div className="flex justify-between items-center">
        <div>{name}</div>
        <div>{arabicName}</div>
      </div>
      <div>Verses: {" " + verses}</div>
      <div>Revealation Place: {" " + revelationPlace}</div>
    </div>
  );
}

export default AllSurrahCard;
// export async function getStaticProps(context){
//   const response =
// }
