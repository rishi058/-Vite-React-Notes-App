import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { RouterProvider } from "react-router-dom";
import ReactLoading from 'react-loading';
import router from "./routes";
import bg_option from "./bg_option";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(() => bg_option, []);
  if (init) {
    return (
      <>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <RouterProvider router={router} />
        <ToastContainer/>
      </>
    );
  }

  return (
    <div className="w-full h-lvh bg-[#723fa6]">
    <div className="justify-center flex items-center w-full h-full fixed top-0 left-0">
        <div>
          <ReactLoading type="spin"/>
        </div>
      </div>
    </div>
);

  
}

export default App;
