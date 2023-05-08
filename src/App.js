import Navbar from './components/Navbar';
import Home from './Home';
import Crypto from './Crypto';
import {Route, Routes} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin" element={<Crypto />}>
          <Route path=":coinId" element={<Crypto />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
