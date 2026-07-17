import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import Contactpage from "./pages/Contactpage";
import Productpage from "./pages/Productpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Contact" element={<Contactpage />} />
        <Route path="/Product" element={<Productpage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
