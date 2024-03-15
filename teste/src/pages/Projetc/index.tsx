import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";
import { Linkbutton } from "../Home/components/LinkButton";

function Project() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-between items-center px-16 py-8">
        <h1 className="mb-4 text-5xl font-sans font-bold">Meus Projetos</h1>
        <Linkbutton to="/newProject" text="Criar projeto" />
      </div>
      <div className="h-full px-16">
        <p>Projetos</p>
      </div>
      <Footer />
    </div>
  );
}

export default Project;
