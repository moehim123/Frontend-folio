// src/App.js
import './App.css';
import { Box } from '@chakra-ui/react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import ProjectsSection from './ProjectsSection';
import Footer from './Footer';
import ProjectPageTemplate from './ProjectPageTemplate';
import allProjects from './DataFile';
import Projects from './Projects'; 
import FullStackUXSection from './FullStackUXSection';


function App() {
  return (
    <Box mx="auto" mt="24px">
      <Header /> 

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <FullStackUXSection />
              <ProjectsSection />
              <Projects />
            </>
          }
        />

        <Route path="/projects/:projectId" element={<ProjectLoader />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </Box>
  );
}

function ProjectLoader() {
  const { projectId } = useParams();
  const project = allProjects.find((p) => p.id === projectId);
  if (!project) {
    return <Navigate to="/" replace />;
  }
  return <ProjectPageTemplate data={project} />;
}

export default App;


