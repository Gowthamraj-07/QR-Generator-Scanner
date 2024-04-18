
import './App.css';
import Generator from './Generator';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Generator.css'
import Button from './Button';
import Scan from './Scan';
function App() {
  return (
    <div className="fullview">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Button />}/>
        <Route path="/generate" element={<Generator />}/>
        <Route path="/Scan" element={<Scan/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
