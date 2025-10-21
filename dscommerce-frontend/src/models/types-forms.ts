




export type FormValues<T extends Record<string, InputField>> = {
  [K in keyof T]: string;
}


export type InputField = {
  value: string;
  id: string;
  name: string;
  type: string;
  placeholder: string;
  autoComplete?: string;
  validation?: (value: string) => boolean;
  message?: string;
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
