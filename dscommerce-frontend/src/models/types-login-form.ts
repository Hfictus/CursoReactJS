



export type TypesLoginFormDTO = {
  username: FormFieldInput;
  password: FormFieldInput;
};

export type FormFieldInput = {
  value: string;
  id: string;
  name: string;
  type: string;
  placeholder: string;
  validation?: (value: string) => boolean;
  message?: string;
};

/*types-crud-form.ts
export type SelectOption = {
  value: string;
  label: string;
};

export type FormFieldAdmin = {
  value: string;
  id: string;
  name: string;
  type: string;
  placeholder?: string;
  validation?: (value: string) => boolean;
  message?: string;
  options?: SelectOption[]; // para campos do tipo select
};
*/