




import { useState } from "react";

/*
Uso de Function não usa verificação de tipos
type Props = {
    onNewValue: Function;
}
*/

//"onNewValue?" para prop opcional 
type Props = {
    onNewValue: (value : number) => void;
}

export default function ChildComponent({ onNewValue } : Props) {
    
    const [count, setCount] = useState(0);
    
    function handleClick() {
        const newCount = count + 1;
        setCount(newCount);
        if(onNewValue) {
            onNewValue(newCount);
        }
    }
    
    return(
        <div style={{border: "1px solid red", padding: "10px"}}>
            <div>{count}</div>
            <button onClick={handleClick}>ok</button>
        </div>
    );
}