import NavBar from "./components/NavBar";  
import Home from "./components/Home";  //importamos la funcion y la llamamos en la app
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <SocialLinks/>
      <Portfolio/>
    </div>
  );
}

export default App;
