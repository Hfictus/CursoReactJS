


export function update<T extends Record<string, { value: string }>>(
    inputs: T,
    name: keyof T,
    newValue: string
) {
    return { ...inputs, [name]: { ...inputs[name], value: newValue } };
}




/*
export function update(inputs: any, name: string, newValue: any) {
    return { ...inputs, [name]: { ...inputs[name], value: newValue } };
}
ou com tipos genéricos:
export function update<T extends Record<string, { value: string }>>(
    inputs: T,
    name: keyof T,
    newValue: string
): T {
    return { ...inputs, [name]: { ...inputs[name], value: newValue } };
}

com tipo específico:
export function update<LoginFormDTO extends Record<string, { value: string }>>(
    inputs: LoginFormDTO,
    name: keyof LoginFormDTO,
    newValue: string
): LoginFormDTO {
    return { ...inputs, [name]: { ...inputs[name], value: newValue } };
}


*/
