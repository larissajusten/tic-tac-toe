import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const Aposta = ({
  valorAposta,
}: {
  valorAposta: number;
}): React.ReactElement => {
  const { t } = useTranslation();

  type CurrencyType = Record<string, string>;

  const typeCurrency: CurrencyType = {
    "pt-BR": "BRL",
    "en-US": "USD",
  };

  const numberFormater = new Intl.NumberFormat(i18n.language, {
    style: "currency",
    currency: typeCurrency[i18n.language],
  });

  return (
    <>
      <div className="aposta-label">{t("bet")}</div>
      <span className="aposta-valor">{numberFormater.format(valorAposta)}</span>
    </>
  );
};

export default Aposta;
