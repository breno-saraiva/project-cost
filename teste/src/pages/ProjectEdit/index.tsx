import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProjectEdit() {
  const { id } = useParams();
  console.log(id);

  const [project, setProject] = useState([]);

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

  return project.map((item) => console.log(item));
}

export default ProjectEdit;
