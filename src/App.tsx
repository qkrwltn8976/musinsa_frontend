import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/homework" element={<Main />} />
        <Route path="*" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
