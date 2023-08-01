import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MenuProvider } from "./store/MenuContext";
import "./App.css";
import Main from "./components/sections";

function App() {
  return (
    <>
      <MenuProvider>
        <Main />
      </MenuProvider>
    </>
  );
}

export default App;
