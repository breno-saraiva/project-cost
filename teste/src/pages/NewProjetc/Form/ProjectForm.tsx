import Select from "../components/select";
import { Input } from "../components/input";
import { ButtonProps, SubmitButton } from "../components/button";
import { FormEvent, useEffect, useState } from "react";
import { createProject } from "../../../api/createProject";
import { getCategorias } from "../../../api/getCategorias";
import { getCategoriasApiRes } from "../../../types";

const ProjectForm: React.FC<ButtonProps> = ({ text }) => {
  const [categories, setCategories] = useState<getCategoriasApiRes[]>([]);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [categorie, setCategorie] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nome = name;
    const orcamento = cost;
    const categoria = categorie;

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
          handleOnChange={(e) => setName(e.target.value)}
          placeholder="Insira o nome do projeto"
        />
      </div>
      <div>
        <Input
          type="number"
          text="Orçamento do Projeto"
          name="budget"
          handleOnChange={(e) => setCost(e.target.value)}
          placeholder="Insira o orçamento total"
        />
      </div>
      <Select
        name="category"
        text="Selecione a Categoria"
        handlechange={(e) => setCategorie(e.target.value)}
        options={categories}
      />
      <SubmitButton type="submit" text={text} />
    </form>
  );
};

export { ProjectForm };
