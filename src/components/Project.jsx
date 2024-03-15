import NoProject from "./NoProject";
import CreateProject from "./CreateProject";
import Task from "./Task";
import { useState } from "react";

export default function Project({
  projects,
  setProjects,
  selectedProject,
  setSelectedProject,
  createProject,
  setCreateProject,
}) {
  return (
    <section className="flex flex-col items-center justify-center w-full gap-y-6">
      {selectedProject != null ? (
        <Task
          projects={projects}
          setProjects={setProjects}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      ) : createProject ? (
        <CreateProject
          createNewProject={setProjects}
          createPage={setCreateProject}
          setCreateProject={setCreateProject}
          setSelectedProject={setSelectedProject}
        />
      ) : (
        <NoProject handleCreateProject={setCreateProject} />
      )}
    </section>
  );
}
