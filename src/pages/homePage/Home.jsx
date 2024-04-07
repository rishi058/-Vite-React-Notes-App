import {useState} from "react";
import NavBar from "../../components/homePage/NavBar";
import CardGrid from "../../components/homePage/CardGrid";
import notesList from "../../models/note_model";
import AddNoteDialogBox from "../../components/homePage/AddNoteDialogBox";
import EditNoteDialogBox from "../../components/homePage/EditNoteDialogBox";

function Home() {
  const [isAddNoteDialogOpen, setIsAddNoteDialogOpen] = useState(false);
  const [isEditNoteDialogOpen, setIsEditNoteDialogOpen] = useState(false);
  const [selectedIndex, changeIndex] = useState(0);
  
  const openAddDialog = () => {
    setIsAddNoteDialogOpen(true);
  };
  const closeAddDialog = () => {
    setIsAddNoteDialogOpen(false);
  };

  function addItem(new_item){
    notesList.push(new_item);
  }

  function saveItem(item){
    for(let i=0; i<notesList.length; i++){
      if(notesList[i].id==item.id){
        notesList[i].title = item.title;
        notesList[i].content = item.content;
        break;
      }
    }
  }

  function deleteItem(item){
    const index = notesList.indexOf(item);
    if(index!=-1){
      notesList.splice(index, 1);
    }
  }


  const openEditDialog = (index) => {
    changeIndex(index);
    setIsEditNoteDialogOpen(true);
  };

  const closeEditDialog = () => {
    setIsEditNoteDialogOpen(false);
  };


  return (
    <>
    <br />
    <NavBar openDialog={openAddDialog} />
    <br />
    <div className="w-[95vw] mx-auto flex justify-center xl:w-[1200px]">
      <CardGrid notes={notesList} openEditDilaog={openEditDialog} />
      <AddNoteDialogBox isOpen={isAddNoteDialogOpen} onClose={closeAddDialog} addItem={addItem}/>
      <EditNoteDialogBox isOpen={isEditNoteDialogOpen} onClose={closeEditDialog} notes={notesList[selectedIndex]} saveItem={saveItem} deleteItem={deleteItem}/>
    </div>
  </>
  );
}

export default Home;