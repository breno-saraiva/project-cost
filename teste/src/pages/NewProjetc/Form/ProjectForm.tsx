import Select from "../components/select";
import { Input } from "../components/input";
import { SubmitButton } from "../components/button";
import { FormEvent, useEffect, useState } from "react";
import { createProject } from "../../../api/createProject";
import { getCategorias } from "../../../api/getCategorias";
import { getCategoriasApiRes } from "../../../types";

type ProjectFormProps = {
  textBtn?: string;
  selValue?: string;
  textOrçamento?: string;
  projectName?: string;
  onSubmit?: () => void;
};

const ProjectForm: React.FC<ProjectFormProps> = ({
  textBtn,
  selValue,
  textOrçamento,
  projectName,
  onSubmit,
}) => {
  const [categories, setCategories] = useState<getCategoriasApiRes[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      const categorias = await getCategorias();
      setCategories(categorias);
    };
    getCategories();
  }, []);

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col py-8 px-0">
      <div>
        <Input
          type="text"
          text="criar projeto"
          name="name"
          handleOnChange={(e) => setName(e.target.value)}
          placeholder={projectName}
        />
      </div>
      <div>
        <Input
          type="number"
          text="criar orçamento"
          name="budget"
          handleOnChange={(e) => setCost(e.target.value)}
          placeholder={textOrçamento}
        />
      </div>
      <Select
        name="category"
        text={selValue}
        handlechange={(e) => setCategorie(e.target.value)}
        options={categories}
      />
      <SubmitButton type="submit" text={textBtn} />
    </form>
  );
};

export { ProjectForm };
