// import { useState } from 'react'
import "./App.css";
import SideBar from "@components/sideBar/SideBar";

function App() {
  return (
    <>
      <SideBar />
      <div className="project">
        <h2 className="projectTitle">Projekopia</h2>
        <p className="projectDescription">
          Projet trop cool qui va beaucoup servir
        </p>
      </div>
    </>
  );
}

export default App;
