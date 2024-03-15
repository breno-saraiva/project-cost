import { BsPencil, BsFillTrashFill } from "react-icons/bs";

type cardProjectProps = {
  id?: string;
  nome?: string;
  orcamento?: string;
  categoria?: string;
  handleRemove?: string;
};

const CardProject: React.FC<cardProjectProps> = ({
  id,
  nome,
  categoria,
  orcamento,
  handleRemove,
}) => {
  return (
    <div className="p-4 border-solid bg-[#7a7a7a] rounded-md w-[24%] m-[.5%]">
      <h4 className="bg-[#222] text-[#ffbb33] text-sm p-2 mb-5 size-5">
        {nome}
      </h4>
      <p>
        <span>Orçamento:</span> R${orcamento}
      </p>
      <p>
        <span></span> {categoria}
      </p>
      <div>
        <p>editar</p>
        <p>remover</p>
      </div>
    </div>
  );
};

export { CardProject };
