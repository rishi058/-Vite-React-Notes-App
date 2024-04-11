import {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavBar from "./components/NavBar";
import CardGrid from "./components/CardGrid";
import AddNoteDialogBox from "./components/AddNoteDialogBox";
import EditNoteDialogBox from "./components/EditNoteDialogBox";
import Notes from "../../services/notes_api";



const isLoggedIn = () => {
  const token = localStorage.getItem('token');
  console.log(token);
  return token && token !== "" ? true : false; // Ensure we properly check for non-empty token
};

function HomePage() {

  const navigate = useNavigate();

  const [notesList, setMyNotes] = useState([]);
  const [username, setUsername] = useState("");

  async function getNotes() {
    const response = await new Notes().getNotes();
    if(response!=''){
      setMyNotes(response.data);
      console.log(response.data);
      setUsername(response.username);
    }
  }

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/login");
    }
    else{
      getNotes();
    }
  }, [navigate]);



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

  function updateItem(item){
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
    <NavBar username={username} openDialog={openAddDialog} />
    <br />
    <div className="w-[95vw] mx-auto flex justify-center xl:w-[1200px]">
      <CardGrid notes={notesList} openEditDilaog={openEditDialog} />
      <AddNoteDialogBox isOpen={isAddNoteDialogOpen} onClose={closeAddDialog} addItem={addItem}/>
      <EditNoteDialogBox isOpen={isEditNoteDialogOpen} onClose={closeEditDialog} note={notesList[selectedIndex]} saveItem={updateItem} deleteItem={deleteItem}/>
    </div>
    <ToastContainer />
  </>
  );
}

export default HomePage;