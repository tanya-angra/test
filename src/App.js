import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Mentorship from './components/Mentorship';
import Contact from './components/Contact';
import Intro from './components/Intro';
import ProjectPlanner from './components/ProjectPlanner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentorship-inquiry" element={<Intro />} />
          <Route path="/project-planner" element={<ProjectPlanner />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
