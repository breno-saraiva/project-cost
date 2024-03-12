import Select from "../components/select";
import { Input } from "../components/input";
import { SubmitButton } from "../components/button";
import { FormEvent, useEffect, useState } from "react";
import { projectProps } from "..";

type ProjectFormProps = {
  createPost: (project: projectProps) => void;
};
const ProjectForm = ({ createPost }: ProjectFormProps) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function onSubmitHandle(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(
      (e.currentTarget.elements.namedItem("name") as HTMLInputElement).value
    );
    //   const nome = e.currentTarget
    //       createPost()
  }

  return (
    <form onSubmit={onSubmitHandle} className="w-full flex flex-col py-8 px-0">
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
