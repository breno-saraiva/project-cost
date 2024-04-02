import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { listProjectProps } from "../../api/listProjects";
import { ProjectForm } from "../NewProjetc/Form/ProjectForm";

function ProjectEdit() {
  const { id } = useParams();
  console.log(id);

  const [project, setProject] = useState<listProjectProps>();
  const [showProjectForm, setShowProjectForm] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setProject(data))
      .catch((err) => console.log(err));
  }, [id]);
  console.log(project);

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  return (
    <div>
      <Navbar />
      <div>
        <div className="flex flex-col p-16 gap-5">
          <div className="flex justify-between">
            <h1 className="mb-4 text-5xl font-sans font-bold">
              <span className="bg-[#222] text-[#ffbb33]">Projeto:</span>{" "}
              {project?.nome}
            </h1>
            <button
              className="border-2 rounded-md w-32 bg-[#222] text-white hover:text-[#ffbb33]"
              onClick={toggleProjectForm}
            >
              {!showProjectForm ? "Editar projeto" : "fechar"}
            </button>
          </div>
          {!showProjectForm ? (
            <div className="flex flex-col gap-4 py-5">
              <p>
                <span className="text-2xl font-bold text-[#222]">
                  Categoria:
                </span>{" "}
                <span className="text-xl font-medium text-[#7a7a7a]">
                  {project?.categoria}
                </span>
              </p>
              <p>
                <span className="text-2xl font-bold text-[#222]">
                  Total de Orçamento:
                </span>{" "}
                <span className="text-xl font-medium text-[#7a7a7a]">
                  {project?.orcamento}
                </span>
              </p>
            </div>
          ) : (
            <div>
              <ProjectForm text="Editar" />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProjectEdit;