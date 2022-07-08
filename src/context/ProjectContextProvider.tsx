import { createContext, useState } from "react";
import { IProject, myProjects, TCategory } from "./data";

interface IContext {
  projects: IProject[];
  filterByCategory?: (category: TCategory) => void;
}

interface ContextProviderProps {
  children: React.ReactElement;
}

const INITIAL_STATE: IContext = { projects: [] };

export const ProjectContext = createContext<IContext>(INITIAL_STATE);

const ProjectContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [projects, setProject] = useState(myProjects);

  const filtering = (category: TCategory): IProject[] => {
    if (category === "All") {
      return myProjects;
    }
    const filteredProjects = myProjects.filter(
      (project) => project.category == category
    );
    return filteredProjects;
  };

  const filterByCategory = (category: TCategory) => {
    setProject(filtering(category));
  };

  return (
    <ProjectContext.Provider value={{ projects, filterByCategory }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
