import React from "react";

function Card(props) {
  return (
    <div
      className={`w-1/2 h-fit backdrop-blur-md bg-white/70 border-0 rounded-lg p-4 flex flex-col justify-center items-center space-y-4 relative z-50 `}
    >
      {props.children}
    </div>
  );
}

export default Card;
