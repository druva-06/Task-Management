import { useRef } from "react";

export default function CreateProject({
  createNewProject,
  createPage,
  setCreateProject,
  setSelectedProject,
}) {
  const projectTitle = useRef();
  const projectDesc = useRef();
  const projectDate = useRef();

  const handleSave = () => {
    const newProject = {
      title: projectTitle.current.value,
      description: projectDesc.current.value,
      date: projectDate.current.value,
      tasks: [],
    };
    createNewProject((prevProjects) => {
      const projects = [...prevProjects];
      projects.push(newProject);
      return projects;
    });
    createPage(false);
  };

  const handleCancel = () => {
    setCreateProject(false);
    setSelectedProject(null);
  };

  return (
    <section className="flex flex-col gap-y-5 w-2/3 items-center justify-center">
      <div className="w-full flex justify-end gap-x-4 -mt-20">
        <button onClick={handleCancel}>Cancel</button>
        <button
          className="px-5 py-2 bg-black text-white rounded-lg"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      <div className="input_container">
        <label className="input_container-label">TITLE</label>
        <input ref={projectTitle} className="input_container-field" />
      </div>
      <div className="input_container">
        <label className="input_container-label">DESCRIPTION</label>
        <textarea ref={projectDesc} className="input_container-field" />
      </div>
      <div className="input_container">
        <label className="input_container-label">DUE DATE</label>
        <input
          ref={projectDate}
          className="input_container-field"
          type="date"
        />
      </div>
    </section>
  );
}
