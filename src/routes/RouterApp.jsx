import { Routes, Route } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import Contacto from "../pages/Contacto";
import Servicio from "../pages/Servicio";
import Nosotros from "../pages/Nosotros";

const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/servicio" element={<Servicio />} />
            <Route path="/contacto" element={<Contacto />} />
        </Routes>
    );
};

export default RoutesApp;
