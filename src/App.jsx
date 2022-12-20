import Navbar from "./scenes/Navbar"
import Landing from "./scenes/Landing"
import Services from "./scenes/Services";
import About from "./scenes/About";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact"
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css"

function App() {  
  const [selectedPage, setSelectedPage] = useState("home");

  return (
    <div className="app" id="content-wrapper">
      <Navbar 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Landing setSelectedPage={setSelectedPage} />
      <Services setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
      <Projects setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App;
