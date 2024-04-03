import Select from "../components/select";
import { Input } from "../components/input";
import { SubmitButton } from "../components/button";
import { useState } from "react";

type ProjectFormProps = {
  textBtn?: string;
  selValue?: string;
  textOrçamento?: string;
  projectName?: string;
  categoria?: { id: string; name: string }[];
  onSubmit: () => void;
};

const ProjectForm: React.FC<ProjectFormProps> = ({
  textBtn,
  selValue,
  textOrçamento,
  projectName,
  categoria,
  onSubmit,
  value:
}) => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [categorie, setCategorie] = useState("");

  type PropFormProp = {
    nome: string;
    orcamento: string;
    categoria: string;
  };
  const value = {
    nome: name,
    orcamento: cost,
    categoria: categorie,
  };

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
        options={categoria}
      />
      <SubmitButton type="submit" text={textBtn} />
    </form>
  );
};

export { ProjectForm };
