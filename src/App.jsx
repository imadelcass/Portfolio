import Projects from './pages/Projects';
import Project from './pages/Project';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    window.location.href = 'https://www.imadelcass.com';
  }, []);


  return (
    <Layout>
      <Routes>
        <Route path='/Portfolio' element={<Home />} />
        <Route path='/Portfolio/projects' element={<Projects />} />
        <Route path='/Portfolio/project/:slug' element={<Project />} />
      </Routes>
    </Layout>
  );
}

export default App;
