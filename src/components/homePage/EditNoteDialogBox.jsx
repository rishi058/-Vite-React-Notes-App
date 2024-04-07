import React, { useState } from 'react';

const EditNoteDialogBox = ({ isOpen, onClose, notes, saveItem, deleteItem}) => {
  if (!isOpen) return null;

  const [title, setTitle] = useState(notes.title);
  const [content, setContent] = useState(notes.content);


  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white/20 w-[80vw] backdrop-blur-md p-8 rounded shadow-xl md:w-[600px] ">
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
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
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
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

          <div className='flex justify-between'>
          <button
              className="bg-red-500/80 hover:bg-red-500/100 text-white px-4 py-2 rounded-md mr-2"
              onClick={() => {
                deleteItem(notes);
                onClose(); // Close the dialog box
              }}
            >
              Delete
            </button>

            <div className="text-right">
          <button
              className="bg-orange-500/50 hover:bg-orange-500/70 text-white px-4 py-2 rounded-md mr-2"
              onClick={() => {
                onClose(); // Close the dialog box
              }}
            >
              Cancel
            </button>

            <button
              className="bg-orange-500/50 hover:bg-orange-500/70 text-white px-4 py-2 rounded-md"
              onClick={() => {
                if(notes.title==='' && notes.content===''){
                  alert("Note should not be empty");
                  return;
                }
                notes.title = title;
                notes.content = content;
                saveItem(notes);
                onClose(); // Close the dialog box
              }}
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