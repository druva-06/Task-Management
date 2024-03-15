import NoProjectImage from "../assets/no-projects.png";

export default function NoProject({ handleCreateProject }) {
  return (
    <>
      <img className="w-20" src={NoProjectImage} title="" alt="" />
      <h2 className="text-2xl font-bold text-stone-600">No Project Selected</h2>
      <span className="text-stone-400">
        Select a project or get started with a new one
      </span>
      <button
        className="p-3 bg-stone-700 text-stone-400 rounded-lg"
        onClick={() => handleCreateProject(true)}
      >
        Create new project
      </button>
    </>
  );
}
