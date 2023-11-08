import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Box } from "@material-ui/core";
import Context from "./components/Tranding/Context";

function App() {
  const [value, setValue] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <Box className="App">
      <Context.Provider value={{ value, setValue, loading, setLoading }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </Box>
  );
}

export default App;
