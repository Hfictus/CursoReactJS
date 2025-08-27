


import { useContext } from "react";
import { ContextProductCount } from "../../utils/context-product";
import "./styles.css";

export default function ProductIcon() {
        
    const { contextProductCount } = useContext(ContextProductCount);

    return(
        <div className="d-flex">
            {
                contextProductCount > 0 &&
                <div>{ contextProductCount }</div>
            }
            {
                contextProductCount == 1
                ? <div><span>produto</span></div>
                : <div><span>produtos</span></div>
            }
        </div>
    );
}