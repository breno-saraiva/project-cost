import Select from "../components/select";
import { Input } from "../components/input";
import { SubmitButton } from "../components/button";
import { SubmitHandler, useForm } from "react-hook-form";

type ProjectFormProps = {
  textBtn?: string;
  selValue?: string;
  textOrçamento?: string;
  projectName?: string;
  categoria?: { id: string; name: string }[];
  onSubmit?: () => void;
};

const ProjectForm: React.FC<ProjectFormProps> = ({
  textBtn,
  selValue,
  textOrçamento,
  projectName,
  categoria,
}) => {
  type FormFields = {
    nome: string;
    orcamento: string;
    categoria: string;
  };

  const form = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = () => {
    console.log(form.getValues());
  };

  const sub = (data: FormFields) => {
    console.log(data, "dataa----------------- ");
  };

  return (
    <form
      onSubmit={form.handleSubmit((data) => sub(data))}
      className="w-full flex flex-col py-8 px-0"
    >
      <div>
        <Input
          {...form.register("nome")}
          type="text"
          text="criar projeto"
          name="name"
          placeholder={projectName}
        />
      </div>
      <div>
        <Input
          {...form.register("orcamento")}
          type="number"
          text="criar orçamento"
          name="budget"
          placeholder={textOrçamento}
        />
      </div>
      <Select
        {...form.register("categoria")}
        name="category"
        text={selValue}
        options={categoria}
      />
      <SubmitButton type="submit" text={textBtn} />
    </form>
  );
};

export { ProjectForm };
