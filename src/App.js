import './App.css';
import Header from './Header';
import Home from './Home.js';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
function App() {
  return (
    
    <Router>
    <div className="app">
    <Routes>
         
         <Route path="/cg" element={<> <Header/> <h1>check out success </h1></>} />
          
          <Route path="/" element={
            <>
            <Header/>
            <Home/>
            </>
          }/>
         
          
    </Routes>
    </div>
    </Router>
  );
}

export default App;
