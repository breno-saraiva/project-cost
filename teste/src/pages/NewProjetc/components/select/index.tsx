import React from "react";

interface SelectProps {
  text?: string;
  name?: string;
  options?: { id: number; name: string }[];
  value?: string;
}

const Select: React.FC<SelectProps> = ({ text, name, options, value }) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="mb-[.6em] font-bold">
        {text}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        className="p-[.7em] rounded-none border-none text-[#7b7b7b]"
      >
        {options?.map(({ id, name }) => (
          <option value={id} key={id}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
