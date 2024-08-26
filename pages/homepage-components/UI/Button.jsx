import React from "react";

function Button(props) {
  return (
    <div className="bg-white hover:bg-blue-900 hover:text-white hover:cursor-pointer hover:duration-500 border-0 px-4 py-2">
      {props.children}
    </div>
  );
}

export default Button;
