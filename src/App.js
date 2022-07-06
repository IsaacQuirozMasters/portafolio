import NavBar from "./components/NavBar";  
import Home from "./components/Home";  //importamos la funcion y la llamamos en la app
import SocialLinks from "./components/SocialLinks";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <SocialLinks/>
    </div>
  );
}

export default App;
