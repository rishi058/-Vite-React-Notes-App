import React from 'react';
import Card from './Card';

function CardGrid({ notes, openEditDilaog }) {

  if(notes.length===0){
    return (
      <div className="justify-center text-xl z-50 font-semibold text-white">
        Click on the + button to add a note
      </div>
    );
  }
  else{
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {notes.map((note, index) => (
          <Card key={index} title={note.title} content={note.content} index={index} openDialog={openEditDilaog}/>
        ))}
      </div>
    );
  }
  
}

export default CardGrid;