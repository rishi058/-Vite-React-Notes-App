import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "./components/NavBar";
import CardGrid from "./components/CardGrid";
import ReactLoading from 'react-loading';
import AddNoteDialogBox from "./components/AddNoteDialogBox";
import EditNoteDialogBox from "./components/EditNoteDialogBox";
import Notes from "../../services/notes_api";

const isLoggedIn = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  return token && token !== "" ? true : false; // Ensure we properly check for non-empty token
};

function HomePage() {
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(true);
  const [notesList, setMyNotes] = useState([]);
  const [username, setUsername] = useState("");
  const [gotoSearch, setGotoSearch] = useState(false);
  const [isAddNoteDialogOpen, setIsAddNoteDialogOpen] = useState(false);
  const [isEditNoteDialogOpen, setIsEditNoteDialogOpen] = useState(false);
  const [selectedIndex, changeIndex] = useState(0);

  async function getNotes() {
    const response = await new Notes().getNotes();
    if (response != "") {
      setMyNotes(response.data);
      console.log(response.data);
      setUsername(response.username);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/login");
    } else if (gotoSearch) {
      navigate("/search", { state: { notesList } });
    } else {
      getNotes();
    }
  }, [navigate, gotoSearch]);

  const openAddDialog = () => {
    setIsAddNoteDialogOpen(true);
  };
  const closeAddDialog = () => {
    setIsAddNoteDialogOpen(false);
  };

  function addItem(new_item) {
    notesList.push(new_item);
  }

  function updateItem(item) {
    for (let i = 0; i < notesList.length; i++) {
      if (notesList[i]._id == item._id) {
        notesList[i].title = item.title;
        notesList[i].content = item.content;
        break;
      }
    }
  }

  function deleteItem(item) {
    const index = notesList.indexOf(item);
    if (index != -1) {
      notesList.splice(index, 1);
    }
  }

  function openEditDialog(index){
    changeIndex(index);
    setIsEditNoteDialogOpen(true);
  };

  const closeEditDialog = () => {
    setIsEditNoteDialogOpen(false);
  };

  if(isLoading) {
    return (
      <>
       <div className="justify-center flex items-center w-full h-full fixed top-0 left-0">
          <div>
            <ReactLoading type="spin"/>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <br />
      <NavBar
        username={username}
        gotoSearch={setGotoSearch}
        openDialog={openAddDialog}
      />
      <br />
      <div className="w-[95vw] mx-auto flex justify-center xl:w-[1200px]">
        {notesList.length > 0 ? (
          <CardGrid notes={notesList} openEditDialog={openEditDialog} />
        ) : (
          <div className="text-center text-lg font-semibold text-white z-50">
            Click on + to add a new note.
          </div>
        )}
        <AddNoteDialogBox
          isOpen={isAddNoteDialogOpen}
          onClose={closeAddDialog}
          addItem={addItem}
        />
        <EditNoteDialogBox
          isOpen={isEditNoteDialogOpen}
          onClose={closeEditDialog}
          note={notesList[selectedIndex]}
          saveItem={updateItem}
          deleteItem={deleteItem}
        />
      </div>
    </>
  );
}

export default HomePage;
