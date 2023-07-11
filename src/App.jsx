import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/NavBar";
import Portofolio from "./components/Porto/Portofolio";
import Social from "./components/Social/Social";
import Tech from "./components/Tech/Tech";


function App() {
  return (
    <>
     <NavBar />
     <Home />
     <About />
    <Portofolio />
    <Tech />
    <Contact />
      

      <Social />
    </>
  );
}

export default App;
