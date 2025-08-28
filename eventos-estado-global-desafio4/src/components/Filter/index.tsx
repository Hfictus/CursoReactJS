


import { useState } from "react";
import "./styles.css";

type FormData = {
    minFormData?: number;
    maxFormData?: number;
}

type FilteringData = {
    onFilter: (min: number, max: number) => void;
}


export default function Filter({ onFilter } : FilteringData) {
      
    const [formData, setFormData] = useState<FormData>({});
    
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({...formData, [name]: value});
    }
   
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    
    }

    function handleClick() {
        
        const min = Number(formData.minFormData) || 0;
                
        const max = formData.maxFormData
            ? formData.maxFormData
            : Number.MAX_VALUE;

        if(onFilter && (min <= max)) {
            console.log("Filter: \n");
            console.log("Min: ", min);
            console.log("Max: ", max);
            onFilter(
                min, max);
        }
        
    }

    return(
        <div className="eegd4-container mb20">
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        name="minFormData"
                        value={formData.minFormData || ""}
                        type="text" 
                        placeholder="Preço mínimo"
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <input 
                        name="maxFormData"
                        value={formData.maxFormData || ""}
                        type="text"
                        placeholder="Preço máximo"
                        onChange={handleInputChange}
                    />
                </div>
                <button onClick={handleClick}>Filtrar</button>
            </form>
        </div>
    );
}

