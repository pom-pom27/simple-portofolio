import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProjectContextProvider from "./context/ProjectContextProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProjectContextProvider>
      <App />
    </ProjectContextProvider>
  </React.StrictMode>
);

//TODO: add hover effect to grid item
