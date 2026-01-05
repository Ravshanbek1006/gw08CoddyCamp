import React from "react";

export default function Btn({title}) {
  return (
    <button className="text-white px-10 py-5 bg-gradient-to-r from-primary1 to-primary2 rounded-lg">
      {title}
    </button>
  );
}
