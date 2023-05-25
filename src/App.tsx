// import { useState } from 'react'
import "./App.css";
import CardContainer from "@components/CardContainer/CardContainer";
import SideBar from "@components/sideBar/SideBar";

function App() {
  return (
    <div className="appContainer">
      <SideBar />
      <div className="project">
        <h2 className="projectTitle">Projekopia</h2>
        <p className="projectDescription">
          Projet trop cool qui va beaucoup servir
        </p>
        <div className="projectStatuts">
          <CardContainer></CardContainer>
          <CardContainer></CardContainer>
          <CardContainer></CardContainer>
        </div>
      </div>
    </div>
  );
}

export default App;
