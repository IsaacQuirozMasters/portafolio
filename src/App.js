/* eslint-disable react/jsx-no-comment-textnodes */
import NavBar from "./components/NavBar";  
import Home from "./components/Home";  //importamos la funcion y la llamamos en la app
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
{/*import Github from "./components/Github";*/}
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact/>
      <SocialLinks />
     {/*<Github />*/}
    </div>
  );
}

export default App;
