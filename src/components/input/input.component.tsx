import React, { Fragment } from "react";
import "./input.css";

interface IInputProps {
  mensagem: string;
  onChange: (value: string) => void;
}

const Input = ({ mensagem, onChange }: IInputProps): React.ReactElement => {
  const handleChange = (event: any) => onChange(event.target.value);

  return (
    <Fragment>
      <label className="label-title">{mensagem}</label>
      <input
        className="input"
        type="text"
        onChange={handleChange}
        placeholder={"Digite o nome do " + mensagem}
      />
    </Fragment>
  );
};

export default Input;
