import React from "react";
import { useTranslation } from "react-i18next";
import "./input.css";

const Data = (): React.ReactElement => {
  const { t } = useTranslation();

  const currentDateTime = Date().toLocaleString();

  return (
    <>
      <label className="label-title">{currentDateTime}</label>
    </>
  );
};

export default Data;
