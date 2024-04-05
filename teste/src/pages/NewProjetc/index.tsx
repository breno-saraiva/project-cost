import { ProjectForm } from "./Form/ProjectForm";
import { useEffect, useState } from "react";
import { getCategorias } from "../../api/getCategorias";
import { createProject } from "../../api/createProject";
import { getCategoriasApiRes } from "../../types";
// import { useNavigate } from "react-router-dom";

export type projectProps = {
  cost?: number;
  service?: string[];
};

function NewProject() {
  const [data, setData] = useState({
    name: "",
    category: "",
    cost: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nome = data.name;
    const categoria = data.category;
    const orcamento = data.cost;
    await createProject({ nome, categoria, orcamento });
  }

  return (
    <div className="w-[450px] my-0 mx-auto p-12">
      <h1 className="mb-4 text-5xl font-sans font-bold">Criar Projeto</h1>
      <p className="text-[#7b7b7b]">
        Crie seu projeto para depois adicionar os serviços
      </p>
      <ProjectForm onSubmit={handleSubmit} textBtn="criar" />
    </div>
  );
}

export default NewProject;
