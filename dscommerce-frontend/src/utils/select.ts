


import { CSSObjectWithLabel } from "react-select";

export const selectStyles = {
    control: (provided: CSSObjectWithLabel) => ({
        ...provided,
        border: "none",
        minHeight: "40px",
        boxShadow: "none",
        "&:hover": {
            border: "none",
        },
    }),
    placeholder: (provided: CSSObjectWithLabel) => ({
        ...provided,
        color: "var(--dsc-color-font-placeholder)",
    }),
    indicatorSeparator: (provided: CSSObjectWithLabel) => ({
        ...provided,
        display: "none",
    }),
}