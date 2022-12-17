import i18next from "i18next";
import React from "react";

const Data = (): React.ReactElement => {
  const dateTimeFormat = new Intl.DateTimeFormat(i18next.languages[0], {dateStyle: 'long'});
  const actualDate = new Date();

  return (
    <>
      <label className="label-title">Data: </label>
      <span>{dateTimeFormat.format(actualDate)}</span>
    </>
  );
};

export default Data;
