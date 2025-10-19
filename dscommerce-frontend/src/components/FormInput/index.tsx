



import { InputHTMLAttributes } from "react";

export default function FormInput(
    //tipagem de prop inline
    props: InputHTMLAttributes<HTMLInputElement> & {
        validation?: (value: string) => boolean;
        message?: string;
    }
) {
            
    const { validation: _validation, message: _message, ...inputProps } = props;

    return(
        <input { ...inputProps } />
    );
}