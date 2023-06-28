import { useState } from "react";
import Main from "./layouts/Main";
import Index from "./pages";
import "./App.css";

function App() {
  return (
    <div className="h-auto w-full bg-black p-0">
     <Main>
    <Index/>
    </Main>
    </div>
  );
}

export default App;
