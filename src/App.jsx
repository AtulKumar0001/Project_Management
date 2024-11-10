import Sidebar from "./components/sidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSeleted";
import { useState } from "react";
import SelectedProject from "./components/ShowSelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  function handleAddTask(taskText) {
    setProjectState((prev) => ({
      ...prev,
      projects: prev.projects.map((project) => {
        if (project.id === prev.selectedProject) {
          const taskId = Math.random();
          const newTask = { text: taskText, id: taskId };
          return { ...project, tasks: [...(project.tasks || []), newTask] };
        }
        return project;
      }),
    }));
  }

  function handleDeleteTask(taskId) {
    setProjectState((prev) => ({
      ...prev,
      projects: prev.projects.map((project) => {
        if (project.id === prev.selectedProject) {
          return {
            ...project,
            tasks: project.tasks.filter((task) => task.id !== taskId),
          };
        }
        return project;
      }),
    }));
  }

  function handleCreateProjectClick() {
    setProjectState((prev) => ({
      ...prev,
      selectedProject: null,
    }));
  }

  function handleAddProject(projectData) {
    setProjectState((prev) => {
      const projectId = Math.random();
      const newProject = { ...projectData, id: projectId, tasks: [] };
      return {
        ...prev,
        selectedProject: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  }

  function closeInputs() {
    setProjectState((prev) => ({
      ...prev,
      selectedProject: undefined,
    }));
  }

  function handleSelectedProject(id) {
    setProjectState((prev) => ({
      ...prev,
      selectedProject: id,
    }));
  }

  function DeleteProject() {
    setProjectState((prev) => ({
      ...prev,
      selectedProject: undefined,
      projects: prev.projects.filter(
        (data) => data.id !== prev.selectedProject
      ),
    }));
  }

  const project = projectState.projects.find(
    (proj) => proj.id === projectState.selectedProject
  );

  let Component = (
    <SelectedProject
      project={project}
      onDelete={DeleteProject}
      addTask={handleAddTask}
      deleteTask={handleDeleteTask}
      tasks={project?.tasks || []}
    />
  );

  if (projectState.selectedProject === null) {
    Component = (
      <NewProject addProject={handleAddProject} closeInputs={closeInputs} />
    );
  } else if (projectState.selectedProject === undefined) {
    Component = <NoProjectSelected Onclick={handleCreateProjectClick} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onclick={handleCreateProjectClick}
        projectDetails={projectState.projects}
        onSideClick={handleSelectedProject}
      />
      {Component}
    </main>
  );
}

export default App;
