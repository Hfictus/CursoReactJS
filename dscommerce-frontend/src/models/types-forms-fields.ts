




export type FormValues<T extends Record<string, InputField>> = {
  [K in keyof T]: string | number;
}

export type InputField = {
  value: string | number;
  id: string;
  name: string;
  type: string;
  placeholder: string;
  autoComplete?: string;
  validation?: (value: string | number) => boolean;
  message?: string;
  invalid?: string;
};

/*Ver se será usado
export type SelectField = {
    options?: SelectOption[];
}

type SelectOption = {
  value: string;
  label: string;
};
*/
