



import Select from "react-select";
import { DataInputFields } from "../../models/types-forms-fields";
import { CategoryDTO } from "../../models/category";
import { FormSelectProps } from "../../models/types-forms-fields";

export default function FormSelect(
    props: Omit<DataInputFields, '_validation'> & {
        className?: string;
        options: CategoryDTO[];
        onChange: (value: unknown) => void;
        onTurnDirty: (name: string) => void;
        isMulti?: boolean;
        getOptionLabel?: (option: CategoryDTO) => string;
        getOptionValue?: (option: CategoryDTO) => string;
    }

) {
    
    const {
        className,
        validation: _validation,
        invalid: invalid = "false",
        dirty: dirty = "false",
        onTurnDirty,
        ...selectProps
    } = props

    function handleBlur() {
        onTurnDirty(props.name);
    }
    
    return(
        <div
            className={className}
            data-invalid={invalid}
            data-dirty={dirty}
        >
            <Select
                { ...(selectProps as FormSelectProps<CategoryDTO, boolean>) }
                onBlur={handleBlur}
            />
        </div>
    );
}