import React from "react";
import "./input.css";

interface IInputNumberProps {
  mensagem: string;
  onChange: (value: any) => void;
}

const InputNumber = ({ mensagem, onChange }: IInputNumberProps): React.ReactElement => {
  const handleChange = (event: any) => onChange(event.target.value);

  return (
    <>
      <label className="label-title">{mensagem}</label>
      <input
        className="input"
        type="number"
        name="input"
        onChange={handleChange}
      />
    </>
  );
};

export default InputNumber;
