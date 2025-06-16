import NavBar from "./components/NavBar";  
import Home from "./components/Home";  
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import WhatsAppContact from "./components/whatsapp-contact";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <SocialLinks />
      <WhatsAppContact />
    </div>
  );
}

export default App;
