import Home from "./components/Home"
import About from "./components/About";
import Work from './components/Work'

import Blog from  './components/Blog'

import Contact from "./components/contact";
import { Routes, Route } from 'react-router-dom'
// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  // </BrowserRouter>
  

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/work" element={<Work />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/blog" element={<Blog />}/>
        </Routes>

        <Footer/>
      </HashRouter>
      

    </>
  )
}




export default App
