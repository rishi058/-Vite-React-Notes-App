import React from "react";

function Card({ title, content }) {
  return (
    <div className="w-[265px] h-[350px] bg-white/20 backdrop-blur-md border-2 pb-4 border-white/20 rounded-md p-4 m-4">
      <h3
        className="text-2xl font-bold mb-4 text-slate-800 overflow-hidden text-ellipsis whitespace-nowrap"
      >
        {title}
      </h3>
      <p className="text-xl overflow-hidden text-ellipsis text-left" style={{
        display: '-webkit-box',
        WebkitLineClamp: 10,
        WebkitBoxOrient: 'vertical',
      }}>
        {content}
      </p>
    </div>
  );
}

export default Card;
