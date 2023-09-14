import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import { Box } from '@material-ui/core';

function App() {
  return (
    <Box className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </Box>
  );
}

export default App;
