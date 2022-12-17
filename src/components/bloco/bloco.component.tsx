import React from "react";
import "./bloco-component.css";
import "./iconO.css";
import "./iconX.css";

export enum BlocoEnum {
  X = "x",
  O = "o",
}

interface IBlocoProps {
  type: BlocoEnum;
  index: number;
  onClick: (index:number) => void;
}

const Bloco = ({ type, index, onClick }: IBlocoProps): React.ReactElement => {
  const renderX = <div className="iconX" />;
  const renderO = <div className="iconO" />;

  return (
    <button className="bloco" onClick={() => onClick(index)}>
      {type === BlocoEnum.X ? renderX : type === BlocoEnum.O ? renderO : null}
    </button>
  );
};

export default Bloco;
