import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Homepage from './components/Homepage/Homepage';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
