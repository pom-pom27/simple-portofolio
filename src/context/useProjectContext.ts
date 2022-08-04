import { useContext } from "react";
import { ProjectContext } from "./ProjectContextProvider";

export const useProjectContext = () => useContext(ProjectContext);
