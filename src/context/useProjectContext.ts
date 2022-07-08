import { useContext } from "react";
import { ProjectContext } from "./projectContextProvider";

export const useProjectContext = () => useContext(ProjectContext);
