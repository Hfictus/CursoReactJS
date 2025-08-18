


import "./styles.css";

export default function Filter() {
    return(
        <div className="eegd4-container mb20">
            <form>
                <div>
                    <input type="text" placeholder="Preço mínimo" />
                </div>
                <div>
                    <input type="text" placeholder="Preço máximo" />
                </div>
                <button type="submit">Filtrar</button>
            </form>
        </div>
    );
}