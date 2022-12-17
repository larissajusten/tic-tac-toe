import { stringify } from "querystring";
import React from "react";
import { useTranslation } from "react-i18next";
// useTranslation é um hook
// que devolve uma função de tradução (t) e a instância do i18n

import Select, { SingleValue } from "react-select";

interface Option {
  value: string;
  label: string;
}

const I18n = (): React.ReactElement => {
  const { i18n } = useTranslation();
  // Instância do i18n

  const options = [
    { value: "pt-BR", label: "Português (Brasil)" },
    { value: "en-US", label: "Inglês (Americano)" },
  ];

  const onChange = (newValue: SingleValue<any>) => {
    i18n.changeLanguage(newValue.value);
  };

  const selectedLanguage = i18n.language; // Idioma selecionado

  const defaultValue = options.find(opt => opt.value === selectedLanguage);

  return (
    <Select
      options={options}
      getOptionLabel={(option)=>option.label}
      getOptionValue={(option)=>option.value}
      defaultValue={defaultValue as Option || 'Select'}
      onChange={onChange}
    />
  );
};

export default I18n;
