

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


export type SelectField = {
    options?: SelectOption[];
}

type SelectOption = {
  value: string;
  label: string;
};

