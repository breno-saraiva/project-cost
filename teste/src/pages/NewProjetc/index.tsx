import { ProjectForm } from "./Form/ProjectForm";
import { projectType } from "../../types/index";
import { createProject } from "../../api/createProject";

export type projectProps = {
  cost?: number;
  service?: string[];
};

function NewProject() {
  async function handleSubmit(data: projectType) {
    await createProject(data);
  }

  return (
    <div className="w-[450px] my-0 mx-auto p-12">
      <h1 className="mb-4 text-5xl font-sans font-bold">Criar Projeto</h1>
      <p className="text-[#7b7b7b]">
        Crie seu projeto para depois adicionar os serviços
      </p>
      <ProjectForm handleOnSubmit={(e) => handleSubmit(e)} textBtn="criar" />
    </div>
  );
}

export default NewProject;
