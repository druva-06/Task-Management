import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Project from "./components/Project";

function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [createProject, setCreateProject] = useState(false);

  console.log(projects)

  return (
    <div className="flex pt-20 h-screen">
      <Sidebar
        projects={projects}
        setSelectedProject={setSelectedProject}
        setCreateProject={setCreateProject}
      />
      <Project
        projects={projects}
        setProjects={setProjects}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        createProject={createProject}
        setCreateProject={setCreateProject}
      />
    </div>
  );
}

export default App;
