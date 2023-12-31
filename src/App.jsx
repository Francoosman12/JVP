import "animate.css";
import { BrowserRouter } from "react-router-dom";
import NavbarApp from "./components/NavbarApp";
import RoutesApp from "./routes/RouterApp.jsx";
import FooterApp from "./components/FooterApp.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';
import 'react-icons';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <NavbarApp />
      <RoutesApp />
      <FooterApp />
    </BrowserRouter>
  );
}

export default App;
