import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';





function App() {
  return (
    <>
      <Navbar />

      <main>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>

      </main>
      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-color)', marginTop: '4rem' }}>
        &copy; {new Date().getFullYear()} - Built with React
      </footer>
    </>
  );
}

export default App;
