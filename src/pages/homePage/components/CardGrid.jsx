import React from "react";
import Card from "./Card";

function CardGrid({ notes, openEditDilaog }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {notes.map((note, index) => (
        <Card
          key={index}
          title={note.title}
          content={note.content}
          index={index}
          openDialog={openEditDilaog}
        />
      ))}
    </div>
  );
}

export default CardGrid;
