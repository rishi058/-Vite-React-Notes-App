import React from 'react';

function Card({ title, content, index, openDialog }) {

  const handleClick = () => {
    openDialog(index);
  };

  return (
    <div className="w-[265px] h-[350px] bg-white/20 backdrop-blur-md border-2 pb-4 border-white/20 rounded-md p-4 m-4" onClick={handleClick} style={{ overflow: 'hidden' }}>
      <h3 className="text-3xl font-bold mb-4" style={{ overflow: 'hidden', textOverflow: 'ellipsis',}}>{title}</h3>
      <p className="text-lg" style={{ overflow: 'hidden', textOverflow: 'ellipsis', }}>{content}</p>
    </div>
  );
}

export default Card;
