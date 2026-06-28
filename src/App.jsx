import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Hobbies from './pages/Hobbies';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/experience"
              element={
                <div className="page-container">
                  <Experience />
                </div>
              }
            />
            <Route
              path="/projects"
              element={
                <div className="page-container">
                  <Projects />
                </div>
              }
            />
            <Route
              path="/hobbies"
              element={
                <div className="page-container">
                  <Hobbies />
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
