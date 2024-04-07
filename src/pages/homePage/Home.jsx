import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
import NavBar from "../../components/homePage/NavBar";
import CardGrid from "../../components/homePage/CardGrid";
import notesList from "../../models/note_model";
import AddNoteDialogBox from "../../components/homePage/AddNoteDialogBox";
import EditNoteDialogBox from "../../components/homePage/EditNoteDialogBox";

function Home() {
  const [init, setInit] = useState(false);
  const [isAddNoteDialogOpen, setIsAddNoteDialogOpen] = useState(false);
  const [isEditNoteDialogOpen, setIsEditNoteDialogOpen] = useState(false);
  const [selectedIndex, changeIndex] = useState(0);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  //-----------------------------------------------------------
  
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

  //-----------------------------------------------------------

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#723fa6",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
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

  return <></>;
}

export default Home;