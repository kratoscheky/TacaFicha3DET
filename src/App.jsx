import React, {useEffect, useState} from "react";
import "./App.css";
import {Routes} from "./routes/index.jsx";
import {Layoult} from "./pages/Layoult/index.jsx";

function App() {
  return (
    <>
      <Layoult>
        <Routes />
      </Layoult>
    </>
  );
}

export default App;
