export default function Sidebar({
  projects,
  setSelectedProject,
  setCreateProject,
}) {
  const handleCreateProject = () => {
    setCreateProject(true);
    setSelectedProject(null);
  };

  return (
    <section className="flex flex-col items-center px-12 py-20 bg-black text-white w-1/4 rounded-tr-3xl h-full gap-y-8">
      <h1 className="text-2xl font-bold">YOUR PROJECTS</h1>
      <button
        className="rounded-lg p-3 bg-stone-600 text-stone-400"
        onClick={handleCreateProject}
      >
        + Add Project
      </button>
      {projects.map((project, index) => (
        <button
          onClick={() => setSelectedProject(index)}
          key={index}
          className="bg-stone-800 px-3 py-2 rounded-lg w-full -mb-4"
        >
          {project.title}
        </button>
      ))}
    </section>
  );
}
