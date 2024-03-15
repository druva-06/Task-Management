export default function CreateTask({
  task,
  setProjects,
  index,
  selectedProject,
}) {
  const handleClear = () => {
    setProjects((prevProjects) => {
      const projects = [...prevProjects];
      const tasks = [...projects[selectedProject].tasks];
      projects[selectedProject].tasks = tasks.filter((task, i) => i !== index);
      return projects;
    });
  };

  return (
    <div className="flex justify-between bg-stone-300 p-4 rounded-lg">
      <label>{task.name}</label>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}
