import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import Contactpage from "./pages/Contactpage";
import Productpage from "./pages/Productpage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
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
