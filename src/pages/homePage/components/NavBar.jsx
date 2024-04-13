import {React, useState} from 'react'
import { CiLogout, CiSearch } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { Navigate } from "react-router-dom";
import { showToast } from '../../../components/toast';

function NavBar({username, gotoSearch, openDialog }) {
  const [gotoLogin, setGotoLogin] = useState(false);

  const logout = () => {
    localStorage.setItem('token', '');
    showToast("Logged out successfully");
    setGotoLogin(true);
  }

  if(gotoLogin){
    return <Navigate to="/login" replace={true}/>;
  }
    return (
        <div className="w-[95vw] mx-auto bg-white/10 backdrop-blur-sm rounded-md flex justify-between items-center p-4 xl:w-[1200px] ">
          <div>
          <button className="bg-slate-600/70  text-white px-4 py-2 hover:bg-slate-600 rounded-md mr-4" onClick={logout}>
          <CiLogout size={20}/>
          </button>
          <span className="text-lg font-semibold">{username}'s Notes </span>
          </div>
          <div>
          <button className="bg-slate-600/70  text-white px-4 py-2 hover:bg-slate-600 rounded-md mr-4" onClick={()=>{gotoSearch(true);}}>
          <CiSearch size={20} />
          </button>
          <button className="bg-slate-600/70  text-white px-4 py-2 hover:bg-slate-600 rounded-md" onClick={()=>{openDialog();}}>
          <IoMdAdd size={20}/>
          </button>
          </div>
          
        </div>
      );
}

export default NavBar;
