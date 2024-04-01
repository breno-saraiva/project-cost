import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";
import { Linkbutton } from "../Home/components/LinkButton";
import { CardProject } from "./components/cardProject";
import { useState, useEffect } from "react";
import { getListProject, listProjectProps } from "../../api/listProjects";

function Project() {
  const [projects, setProjects] = useState<listProjectProps[]>([]);

  useEffect(() => {
    getList();
  }, []);

  async function getList() {
    try {
      const list = await getListProject();
      setProjects(list);
    } catch {
      console.log("error");
    }
  }

  async function deleteItem(id: string) {
    await fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id));
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Navbar />
      <div className="flex justify-between items-center px-16 py-8">
        <h1 className="mb-4 text-5xl font-sans font-bold">Meus Projetos</h1>
        <Linkbutton to="/newProject" text="Criar projeto" />
      </div>
      <div className="px-16">
        <p className="font-sans text-3xl mb-3">Projetos</p>
        <div className="flex flex-wrap">
          {projects.length > 0 &&
            projects.map((project) => (
              <CardProject
                id={project.id}
                nome={project.nome}
                orcamento={project.orcamento}
                categoria={project.categoria}
                key={project.id}
                handleRemove={deleteItem}
              />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Project;
