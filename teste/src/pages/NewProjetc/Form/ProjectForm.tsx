import Select from "../components/select";
import { Input } from "../components/input";
import { SubmitButton } from "../components/button";
import { FormEvent, useEffect, useState } from "react";
import { createProject } from "../../../api/createProject";
import { getCategorias } from "../../../api/getCategorias";
import { getCategoriasApiRes } from "../../../types";

const ProjectForm = () => {
  const [categories, setCategories] = useState<getCategoriasApiRes[]>([]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nome = e.target[0].value;
    const orcamento = e.target[1].value;
    const categoria = e.target[2].value;

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
    <form onSubmit={handleSubmit} className="w-full flex flex-col py-8 px-0">
      <div>
        <Input
          type="text"
          text="nome do projeto"
          name="name"
          placeholder="Insira o nome do projeto"
        />
      </div>
      <div>
        <Input
          type="number"
          text="Orçamento do Projeto"
          name="budget"
          placeholder="Insira o orçamento total"
        />
      </div>
      <Select
        name="category"
        text="Selecione a Categoria"
        options={categories}
      />
      <SubmitButton type="submit" text="criar projeto" />
    </form>
  );
};

export { ProjectForm };
