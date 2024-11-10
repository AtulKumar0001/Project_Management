import Sidebar from "./components/sidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSeleted";
import { useState } from "react";

function App() {
  const [projectState, setprojectState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  function handleCreateProjectClick() {
    setprojectState((prev) => {
      return {
        ...prev,
        selectedProject: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setprojectState((prev) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prev,
        selectedProject: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  }

  function closeInputs() {
    setprojectState((prev) => {
      return {
        ...prev,
        selectedProject: undefined,
      };
    });
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onclick={handleCreateProjectClick} />
      {projectState.selectedProject === null ? (
        <NewProject
          addProject={handleAddProject}
          projectDetails={projectState}
          closeInputs={closeInputs}
        />
      ) : (
        <NoProjectSelected Onclick={handleCreateProjectClick} />
      )}
    </main>
  );
}

export default App;
