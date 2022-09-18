import React from "react";
import MainComponent from "./components/MainComponent/MainComponent";
import Sidebar from "./components/Sidebar/Sidebar";
import StateContextProvider from "./context/StateContextProvider";

function App() {
  return (
    <StateContextProvider>
      <Sidebar />
      <MainComponent />
    </StateContextProvider>
  );
}

export default App;
