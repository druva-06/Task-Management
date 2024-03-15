import { useRef, useState } from "react";
import CreateTask from "./CreateTask";

export default function Task({
  projects,
  setProjects,
  selectedProject,
  setSelectedProject,
}) {
  const project = projects[selectedProject];
  const taskTitle = useRef();


  console.log(projects)

  const handleTask = () => {
    setProjects((prevProjects) => {
      const projects = [...prevProjects];
      const tasks = projects[selectedProject].tasks;
      tasks.push({ name: taskTitle.current.value });
      return projects;
    });
  };

  const handleDelete = () => {
    setProjects((prevProjects) => {
      return prevProjects.filter((ele, index) => index!==selectedProject)
    });
    setSelectedProject(null);
  };

  return (
    <section className="flex flex-col w-2/3 gap-y-5">
      <div className="flex flex-row justify-between border-b-2 border-stone-600 items-start">
        <div className="flex flex-col gap-y-5 mb-5">
          <h1 className="text-3xl font-bold text-stone-600">{project.title}</h1>
          <span className="text-stone-400">{project.date}</span>
          <span className="text-stone-600 font-medium">
            {project.description}
          </span>
        </div>
        <button className="text-stone-600 font-medium" onClick={handleDelete}>
          Delete
        </button>
      </div>
      <div className=" flex flex-col gap-y-5">
        <h2 className="text-2xl font-bold text-stone-600">Task</h2>
        <div>
          <input className="input_container-field w-fit" ref={taskTitle} />
          <button className="input_container-label ml-3" onClick={handleTask}>
            Add Task
          </button>
        </div>
        <div className="flex flex-col gap-y-5 mt-10 overflow-y-auto max-h-56">
          {project.tasks.map((task, index) => (
            <CreateTask
              key={index}
              task={task}
              setProjects={setProjects}
              index={index}
              selectedProject={selectedProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
