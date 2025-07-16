




import { type ChangeEvent } from "react";

type UserSearchBarProps = {
    name: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

export default function UserSearchBar({ 
    name, 
    value, 
    onChange, 
    placeholder 
}: UserSearchBarProps) {
    return(
        <div>
            <input 
                name={name}
                value={value}
                type="text"
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
}

