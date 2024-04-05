import Select from "../components/select";
import { Input } from "../components/input";
import { SubmitButton } from "../components/button";
import { useEffect, useState } from "react";
import { getCategorias } from "../../../api/getCategorias";
import { getCategoriasApiRes, projectType } from "../../../types";

type ProjectFormProps = {
  textBtn?: string;
  projectData?: projectType;
  onSubmit: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ProjectForm: React.FC<ProjectFormProps> = ({
  textBtn,
  onSubmit,
  projectData,
}) => {
  const [categories, setCategories] = useState<getCategoriasApiRes[]>([]);
  const [project, setProject] = useState(projectData);

  useEffect(() => {
    const getCategories = async () => {
      const categorias = await getCategorias();
      setCategories(categorias);
    };
    getCategories();
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(project);
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setProject({ ...project, [e.target.name]: e.target.name });
    console.log(project);
  }

  return (
    <form onSubmit={submit} className="w-full flex flex-col py-8 px-0">
      <div>
        <Input
          handleOnChange={handleChange}
          type="text"
          text="nome do projeto"
          name="name"
          placeholder="Insira o nome do projeto"
        />
      </div>
      <div>
        <Input
          handleOnChange={handleChange}
          type="number"
          text="orçamento do projeto"
          name="budget"
          placeholder="Insira o orçamento total"
        />
      </div>
      <Select options={categories} />
      <SubmitButton type="submit" text={textBtn} />
    </form>
  );
};

export { ProjectForm };
