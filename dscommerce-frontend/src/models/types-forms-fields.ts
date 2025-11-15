


import { Props as SelectProps } from "react-select";


export type FormValues<T extends Record<string, DataInputFields>> = {
  [K in keyof T]: string | number | [];
}

export type DataInputFields = {
  value: string | number | [];
  id: string;
  name: string;
  type?: string;
  placeholder: string;
  autoComplete?: string;
  validation?: (value: unknown | unknown[]) => boolean;
  message?: string;
  invalid?: string;
  dirty?: string;
};


export type FormSelectProps<
  T,
  IsMulti extends boolean = false
> = SelectProps<T, IsMulti>;
