import { createBrowserRouter } from "react-router-dom";
import { homePage } from "../pages/Home/routes/index.routes";
import { empresas } from "../pages/Empresas/routes/index.routes";
import { newProject } from "../pages/NewProjetc/routes/index.routes";
import { contato } from "../pages/Contato/routes/index.routes";
import { project } from "../pages/Projetc/routes/index.routes";
import { projectEdit } from "../pages/ProjectEdit/routes/index.routes";

const router = createBrowserRouter([
  ...homePage,
  ...empresas,
  ...newProject,
  ...contato,
  ...project,
  ...projectEdit,
]);

export { router };
