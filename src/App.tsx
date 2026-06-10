import { Route, Routes } from "react-router-dom";
import Blogpage from "./pages/Blogpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Blogpage />} />
      </Routes>
    </>
  );
}

export default App;
