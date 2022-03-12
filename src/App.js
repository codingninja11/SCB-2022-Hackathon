import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;