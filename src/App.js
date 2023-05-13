import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Crypto from "./pages/Crypto";
import {Route, Routes} from "react-router-dom";
import "./dist/css/main.css";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crypto" element={<Crypto />}>
          <Route path=":coinId" element={<Crypto />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
