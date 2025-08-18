


import "./styles.css";

export default function Filter() {
    return(
        <form>
            <div>
                <input type="text" placeholder="Preço mínimo" />
            </div>
            <div>
                <input type="text" placeholder="Preço máximo" />
            </div>
            <button type="submit">Filtrar</button>
        </form>
    );
}