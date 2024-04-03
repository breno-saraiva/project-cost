import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";
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
  const [categories, setCategories] = useState<getCategoriasApiRes[]>([]);

  async function handleSubmit() {
    await createProject({ categoria, nome, orcamento });
  }

  useEffect(() => {
    const getCategories = async () => {
      const categorias = await getCategorias();
      setCategories(categorias);
    };
    getCategories();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="w-[450px] my-0 mx-auto p-12">
        <h1 className="mb-4 text-5xl font-sans font-bold">Criar Projeto</h1>
        <p className="text-[#7b7b7b]">
          Crie seu projeto para depois adicionar os serviços
        </p>
        <ProjectForm
          onSubmit={handleSubmit}
          projectName="insira o nome do porjeto"
          textOrçamento="insira o orçamento total"
          selValue="selecione a categoria"
          textBtn="criar"
          categoria={categories}
        />
      </div>
      <Footer />
    </div>
  );
}

export default NewProject;
