import { projectType } from "../types";


export const createProject = (project: projectType ) => {
  fetch("http://localhost:5000/projects", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(project),
  })
    .then((resp) => resp.json)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
};