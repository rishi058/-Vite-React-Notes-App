import React from "react";

function Card({ title, content }) {
  return (
    <div className="w-[265px] h-[350px] bg-white/20 backdrop-blur-md border-2 pb-4 border-white/20 rounded-md p-4 m-4">
      <h3
        className="text-3xl font-bold mb-4 text-slate-800 overflow-hidden text-ellipsis"
      >
        {title}
      </h3>
      <p className="text-lg overflow-hidden text-ellipsis">
        {content}
      </p>
    </div>
  );
}

export default Card;
