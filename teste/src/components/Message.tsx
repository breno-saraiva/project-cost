type messageProps = {
  type?: string;
  msg?: string;
};

const Message: React.FC<messageProps> = (type, msg) => {
  return (
    <div className="w-full p-4 mx-0 my-auto text-center mb-8 border-solid border-2">
      <span>simbora</span>
    </div>
  );
};

export { Message };
