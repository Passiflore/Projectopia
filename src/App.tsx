// import { useState } from 'react'
import "./App.css";
import { CardContainerStore } from "@components/CardContainer/CardContainer";
import SideBar from "@components/sideBar/SideBar";
import { Provider } from "react-redux";
import store from "./store/index.js";

function App() {
  return (
    <Provider store={store}>
      <div className="appContainer">
        <SideBar />
        <div className="project">
          <h2 className="projectTitle">Projektopia</h2>
          <p className="projectDescription">
            Projet trop cool qui va beaucoup servir
          </p>
          <div className="projectStatuts">
            <CardContainerStore title="ToDo" />
            <CardContainerStore title="InProgress" />
            <CardContainerStore title="Completed" />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
