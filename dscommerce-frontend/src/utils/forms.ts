

import { FormValues, DataInputFields } from "../models/types-forms-fields";

export function update<T extends Record<string, DataInputFields>>(
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

export function toValues<T extends Record<string, DataInputFields>>(
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

export function updateAll<T extends Record<string, DataInputFields>>(
    inputs: T,
    newValues: T
): T {
    const newInputs = {} as T;
    for(const name in inputs) {
        newInputs[name] = {...inputs[name], value: newValues[name]};
    }
    return newInputs;
}
/*Código do professor:
export function updateAll(inputs: any, newValues: any) {
    const newInputs: any = {};
    for(var name in inputs) {
        newInputs[name] = {...inputs[name], value: newValues[name]};
    }
    return newInputs;
}
*/

export function validate<T extends Record<string, DataInputFields>>(
    inputs: T,
    name: string
): T {
    if(!inputs[name].validation) {
        return inputs;
    }
    const isInvalid = !inputs[name].validation(inputs[name].value);
    return {...inputs, [name]: {...inputs[name], invalid: isInvalid.toString()}};
}
/*Código do professor:
export function validate(inputs: any, name: string) {
    if(!inputs[name].validation) {
        return inputs;
    }
    const isInvalid = !inputs[name].validation(inputs[name].value);
    return {...inputs, [name]: {...inputs[name], invalid: isInvalid.toString()}};
}
*/


export function validateAll<T extends Record<string, DataInputFields>>(
    inputs: T
): T {
    const newInputs = {} as T;
    for(const name in inputs) {
        if(inputs[name].validation) {
            const isInvalid = !inputs[name].validation(inputs[name].value);
            newInputs[name] = { ...inputs[name], invalid: isInvalid.toString() };
        }else {
            newInputs[name] = { ...inputs[name] };
        }
    }
    return newInputs;
}
/*Código do professor para validateAll:
export function validateAll(inputs: any) {
    const newInputs: any = {};
    for(var name in inputs) {
        if(inputs[name].validation) {
            const isInvalid = !inputs[name].validation(inputs[name].value);
            newInputs[name] = { ...inputs[name], invalid: isInvalid.toString() };
        }else {
            newInputs[name] = { ...inputs[name] };
        }
    }
    return newInputs;
}
*/

export function toDirty<T extends Record<string, DataInputFields>>(
    inputs: T,
    name: string
): T {
    return { ...inputs, [name]: { ...inputs[name], dirty: "true"} };
}
/*Código do professor:
export function toDirty(inputs: any, name: string) {
    return { ...inputs, [name]: { ...inputs[name], dirty: "true"} };
}
*/

export function toDirtyAll<T extends Record<string, DataInputFields>>(
    inputs: T
): T {
    const newInputs = {} as T;
    for(const name in inputs) {
        newInputs[name] = { ...inputs[name], dirty: "true" };
    }
    return newInputs;
}
/*Código do professor para toDirtyAll:
export function toDirtyAll(inputs: any) {
    const newInputs: any = {};
    for(var name in inputs) {
        newInputs[name] = { ...inputs[name], dirty: "true" };
    }
    return newInputs;
}
*/


export function updateAndValidate<T extends Record<string, DataInputFields>>(
    inputs: T,
    name: string,
    newValue: string
): T {
    const dataUpdate = update(inputs, name, newValue);
    return validate(dataUpdate, name);
        
}
/*Código do professor:
export function updateAndValidate(inputs: any, name: string, newValue: any) {
    const dataUpdate = update(inputs, name, newValue);
    return validate(dataUpdate, name);
}
*/

export function dirtyAndValidate<T extends Record<string, DataInputFields>>(
    inputs: T,
    name: string
): T {
    const dataDirty = toDirty(inputs, name);
    return validate(dataDirty, name);
}
/*Código do professor:
export function dirtyAndValidate(inputs: any, name: string) {
    const dataDirty = toDirty(inputs, name);
    return validate(dataDirty, name);
}
*/


export function dirtyAndValidateAll<T extends Record<string, DataInputFields>>(
    inputs: T
): T {
    return validateAll(toDirtyAll(inputs));
}
/*Função do professor para dirtyAndValidateAll:
export function dirtyAndValidateAll(inputs: any) {
    return validateAll(toDirtyAll(inputs));
}
*/


export function hasAnyInvalid<T extends Record<string, DataInputFields>>(
    inputs: T
): boolean {
    for(const name in inputs) {
        if(inputs[name].dirty === "true" && inputs[name].invalid === "true") {
            return true;
        }
    }
    return false;
}
/*Função do professor para hasAnyInvalid:
export function hasAnyInvalid(inputs: any) {
    for(var name in inputs) {
        if(inputs[name].dirty === "true" && inputs[name].invalid === "true") {
            return true;
        }
    }
    return false;
}
*/

