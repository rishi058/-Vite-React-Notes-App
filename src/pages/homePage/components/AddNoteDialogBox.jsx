import React, { useState } from "react";
import { showErrorToast } from "../../../components/toast";

import Notes from "../../../services/notes_api";

const AddNoteDialogBox = ({ isOpen, onClose, addItem }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  if (!isOpen) return null;


  async function addNoteToDB() {
    if (title === "" && content === "") {
      showErrorToast("Note should not be empty");
      return;
    }
    await new Notes().addNote(title, content).then((note) => {
      if (note!="") {
        addItem(note);
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
              className="mt-1 p-2 block w-full border-gray-300 rounded-md"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              className="mt-1 p-2 block w-full border-gray-300 rounded-md"
              rows="8"
              placeholder="Enter content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
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
              onClick={addNoteToDB}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNoteDialogBox;

function getRandomId(length) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars.charAt(randomIndex);
  }
  return result;
}
