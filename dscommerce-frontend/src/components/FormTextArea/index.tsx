


import {  TextareaHTMLAttributes } from "react";

export default function FormTextArea(
    props: TextareaHTMLAttributes<HTMLTextAreaElement> & {
        validation?: (value: unknown) => boolean;
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
        ...textareaProps
    } = props;

    function handleBlur() {
        onTurnDirty(props.name as string);
    }

    return(
        <textarea
            { ...textareaProps }
            onBlur={handleBlur}
            data-invalid={invalid}
            data-dirty={dirty}
        />
    );
}