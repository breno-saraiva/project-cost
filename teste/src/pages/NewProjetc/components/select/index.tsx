import React from "react";

interface SelectProps {
  text?: string;
  name?: string;
  options?: { id: string; name: string }[];
  value?: string;
  handlechange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({
  text,
  name,
  options,
  value,
  handlechange,
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="mb-[.6em] font-bold">
        {text}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={handlechange}
        className="p-[.7em] rounded-none border-none text-[#7b7b7b]"
      >
        {options?.map(({ id, name }) => (
          <option value={name} key={id}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
