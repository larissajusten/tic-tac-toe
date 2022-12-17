import i18next from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";

const Data = (): React.ReactElement => {
  const { t } = useTranslation();
  const dateTimeFormat = new Intl.DateTimeFormat(i18next.languages[0], {dateStyle: 'long'});
  const actualDate = new Date();

  return (
    <>
      <label className="label-title">{t("date")}</label>
      <span>{dateTimeFormat.format(actualDate)}</span>
    </>
  );
};

export default Data;
