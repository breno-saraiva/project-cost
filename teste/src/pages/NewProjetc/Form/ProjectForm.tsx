import Select from "../components/select";
import { Input } from "../components/input";
import { SubmitButton } from "../components/button";
import { useEffect, useState } from "react";
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
          value={projectName}
        />
      </div>
      <div>
        <Input
          type="number"
          text="criar orçamento"
          name="budget"
          value={textOrçamento}
        />
      </div>
      <Select value={selValue} options={categories} />
      <SubmitButton type="submit" text={textBtn} />
    </form>
  );
};

export { ProjectForm };
