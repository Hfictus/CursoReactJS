



import { InputHTMLAttributes } from "react";

export default function FormInput(
    //tipagem de prop inline
    props: InputHTMLAttributes<HTMLInputElement> & {
        validation?: (value: string) => boolean;
        message?: string;
        invalid?: string;
        dirty?: string;
        onTurnDirty: (name: string) => void;
    }
) {
            
    const {
        validation: _validation,
        invalid: invalid = "false",
        dirty: dirty = "false",
        onTurnDirty: onTurnDirty,
        ...inputProps 
    } = props;

    function handleBlur() {
        const name = props.name as string;
        onTurnDirty(name);
    }

    return(
        <input
            { ...inputProps }
            onBlur={handleBlur}
            data-invalid={invalid}
            data-dirty={dirty}
        />
    );
}