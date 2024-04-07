import {React, useState} from 'react'

function NavBar({ openDialog }) {

    return (
        <div className="w-[95vw] mx-auto bg-white/10 backdrop-blur-3xl rounded-md flex justify-between items-center p-4 xl:w-[1200px] ">
          <span className="text-xl">Notes App</span>
          <button className="bg-orange-500/50  text-white px-4 py-2 hover:bg-orange-500/70 rounded-md" onClick={openDialog}>
            Add a Note
          </button>
        </div>
      );
}

export default NavBar;
