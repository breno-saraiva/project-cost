import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";
import { ProjectForm } from "./Form/ProjectForm";
// import { useNavigate } from "react-router-dom";

export type projectProps = {
  cost?: number;
  service?: string[];
};

function NewProject() {
  // const navigate = useNavigate();

  function createPost(project: projectProps) {
    //initialize cost and services
    project.cost = 0;
    // project.services = [];

    fetch("http://localhost:5000/project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        //redirect
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Navbar />
      <div className="w-[450px] my-0 mx-auto p-12">
        <h1 className="mb-4 text-5xl font-sans font-bold">Criar Projeto</h1>
        <p className="text-[#7b7b7b]">
          Crie seu projeto para depois adicionar os serviços
        </p>
        <ProjectForm createPost={createPost} />
      </div>
      <Footer />
    </div>
  );
}

export default NewProject;
