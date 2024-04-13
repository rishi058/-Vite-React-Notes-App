import React from "react";
import Card from "./Card";

function CardGrid({ notes, openEditDialog }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-2">
      {notes.map((note, index) => (
        <div
          key={index}
          onClick={() => {
            openEditDialog(index);
          }}
        >
          <Card title={note.title} content={note.content} />
        </div>
      ))}
    </div>
  );
}

export default CardGrid;
