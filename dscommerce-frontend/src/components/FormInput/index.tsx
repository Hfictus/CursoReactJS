



import { InputHTMLAttributes } from "react";

export default function FormInput(
    //tipagem de prop inline
    props: InputHTMLAttributes<HTMLInputElement> & {
        validation?: (value: string) => boolean;
        message?: string;
        invalid?: string;
    }
) {
            
    const { validation: _validation, invalid: invalid, ...inputProps } = props;

    return(
        <input { ...inputProps } data-invalid={invalid} />
    );
}