import { React, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CardGrid from "../homePage/components/CardGrid";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import EditNoteDialogBox from "../homePage/components/EditNoteDialogBox";

function SearchPage() {
  let location = useLocation();
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");
  const [isEditNoteDialogOpen, setIsEditNoteDialogOpen] = useState(false);
  const [selectedIndex, changeIndex] = useState(0);
  const [notesList, setMyNotes] = useState(location.state.notesList);

  function performQuery(){
    if(searchText == "") {setMyNotes(location.state.notesList); return; }

    const result = [];
    for (let i = 0; i < notesList.length; i++) {
      if (notesList[i].title.includes(searchText) || notesList[i].content.includes(searchText)) {
        result.push(notesList[i]);
      }
    }

    setMyNotes(result);
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

  const openEditDialog = (index) => {
    changeIndex(index);
    setIsEditNoteDialogOpen(true);
  };

  const closeEditDialog = () => {
    setIsEditNoteDialogOpen(false);
  };

  const handleGoBack = () => {
    navigate(-1); // Go back one step in the history
  };

  return (
    <div>
      <br />
      <div className="w-[95vw] mx-auto bg-white/10 backdrop-blur-md rounded-md flex justify-between items-center p-4 xl:w-[1200px] ">
      <button className="bg-slate-600/70  text-white px-4 py-2 hover:bg-slate-600 rounded-md mr-4" onClick={handleGoBack}>
      <IoMdArrowRoundBack size={20} />
      </button>
      <div className="w-full border-1 h-10 md:mx-8 lg:mx-20 xl:mx-28 bg-white/20 rounded-md flex justify-center items-center ">
      <input
              id="title"
              type="text"
              placeholder="Search Notes..."
              className="w-full rounded-md px-2 py-1 focus:outline-none placeholder:text-white/50 bg-transparent"
              value={searchText}
              onChange={(e) => {setSearchText(e.target.value); performQuery();}}
            />
            <FaSearch size={20} style={{color:'white'}}/>
            <div className="w-2"></div>
      </div>
      </div>
      <br />
      <div className="w-[95vw] mx-auto flex justify-center xl:w-[1200px]">
      {notesList.length > 0 ? (
          <CardGrid notes={notesList} openEditDialog={openEditDialog} />
        ) : (
          <div className="text-center text-lg font-semibold text-white z-50">
            No Notes Found !
          </div>
        )}
        <EditNoteDialogBox
          isOpen={isEditNoteDialogOpen}
          onClose={closeEditDialog}
          note={notesList[selectedIndex]}
          saveItem={updateItem}
          deleteItem={deleteItem}
        />
      </div>
    </div>
  );
}

export default SearchPage;
