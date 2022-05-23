
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Home from "./home/Home";
import Footer from "./footer/Footer";
import About from './about/About';


function App() {
  return (
    <div className="App">
     <Router>
      <Header/>
      <Routes>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
      </Routes>
      <Footer/> 
    </Router>  
    </div>
  );
  }
export default App;
