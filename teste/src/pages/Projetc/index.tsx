import { Message } from "../../components/Message";
import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";

function Project() {
  return (
    <div>
      <Navbar />
      <h1 className="mb-4 text-5xl font-sans font-bold">Meus Projetos</h1>
      <Message msg="Alguma mensagem" />
      <Footer />
    </div>
  );
}

export default Project;
