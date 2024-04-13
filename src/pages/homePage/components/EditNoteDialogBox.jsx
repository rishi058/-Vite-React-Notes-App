import React, { useState, useEffect} from "react";
import { showErrorToast } from "../../../components/toast";

import Notes from "../../../services/notes_api";

const EditNoteDialogBox = ({ isOpen, onClose, note, saveItem, deleteItem }) => {
  if (!isOpen || !note) return null;            // it should always on top , to avoid bugs 

  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  async function updateNoteToDB() {
    if (title === "" && content === "") {
      showErrorToast("Note should not be empty");
      return;
    }

    note.title = title;
    note.content = content;

    await new Notes().updateNote(note).then((ok) => {
      if (ok) {
        saveItem(note);
        onClose();
      }
    });
  }

  async function deleteNoteToDB() {
    await new Notes().deleteNote(note._id).then((ok) => {
      if (ok) {
        deleteItem(note);
        onClose();
      }
    });
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white/20 w-[80vw] backdrop-blur-md p-8 rounded shadow-xl md:w-[600px] ">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              className="mt-1 p-2 block w-full rounded-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                outline: "none",
                border: "none",
                ":focus": {
                  outline: "none",
                  border: "none",
                },
              }}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Content
            </label>
            <textarea
              id="content"
              className="mt-1 p-2 block w-full rounded-md"
              rows="8"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              style={{
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                outline: "none",
                border: "none",
                ":focus": {
                  outline: "none",
                  border: "none",
                },
              }}
            />
          </div>

          <div className="flex justify-between">
            <button
              className="bg-red-500/80 hover:bg-red-500/100 text-white px-4 py-2 rounded-md mr-2"
              onClick={deleteNoteToDB}
            >
              Delete
            </button>

            <div className="text-right">
              <button
                className="bg-slate-600/70 hover:bg-slate-600 text-white px-4 py-2 rounded-md mr-2"
                onClick={() => {
                  onClose(); // Close the dialog box
                }}
              >
                Cancel
              </button>

              <button
                className="bg-slate-600/70 hover:bg-slate-600 text-white px-4 py-2 rounded-md"
                onClick={updateNoteToDB}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditNoteDialogBox;
