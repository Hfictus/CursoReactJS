

import { FormValues, InputField } from "../models/types-forms";

export function update<T extends Record<string, { value: string }>>(
    inputs: T,
    name: keyof T,
    newValue: string
): T {
    return { ...inputs, [name]: { ...inputs[name], value: newValue } };
}
/*Código do professor para update:
export function update(inputs: any, name: string, newValue: any) {
    return { ...inputs, [name]: { ...inputs[name], value: newValue } };
}
*/


export function toValues<T extends Record<string, InputField>>(
    inputs: T
): FormValues<T>  {
    const data = {} as FormValues<T>;
    for(const name in inputs){
        data[name as keyof T] = inputs[name].value;
    }
    return data;
}
/*Código do professor para toValues:
export function toValues(inputs: any) {
    const data : any = {};
    for(var name in inputs) {
        data[name] = inputs[name].value;
    }
    return data;
}
Meu VSCode reclamou pelo uso do var, recomendando let ou const
(não configurei nada sobre o var no eslint.config.js)
*/