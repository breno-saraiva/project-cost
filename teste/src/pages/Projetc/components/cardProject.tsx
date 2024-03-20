import { FaTrashCan } from "react-icons/fa6";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { Link } from "react-router-dom";

type cardProjectProps = {
  id?: string;
  nome?: string;
  orcamento?: string;
  categoria?: string;
  handleRemove?: () => void;
};

const CardProject: React.FC<cardProjectProps> = ({
  // id,
  nome,
  categoria,
  orcamento,
  handleRemove,
}) => {
  return (
    <div className="p-4 outline outline-1 outline-[#7a7a7a] rounded-md w-[24%] m-[0.5%]">
      <h4 className="bg-[#222] text-[#ffbb33] text-lg p-2 mb-5 rounded-md font-semibold">
        {nome}
      </h4>
      <p className="text-[#7a7a7a] mb-4 flex items-center">
        <span className="font-bold block">Orçamento: </span> R$
        {orcamento}
      </p>
      <p className="text-[#7a7a7a] mb-4 flex items-center">
        <span className="font-bold block">Categoria: </span> {categoria}
      </p>
      <div className="flex justify-between items-center mt-5">
        <Link to="/" className="text-xl">
          <HiOutlinePencilAlt />
        </Link>
        <button>
          <FaTrashCan onClick={handleRemove} />
        </button>
      </div>
    </div>
  );
};

export { CardProject };
