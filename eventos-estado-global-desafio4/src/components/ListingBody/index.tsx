



import Filter from "../Filter";
import Listing from "../Listing";
import "./styles.css";

export default function ListingBody() {
    return(
        <section id="listing-body-section">
            <div className="eegd4-container mb20">
                <Filter />
            </div>
            <div className="eegd4-container listing-container">
                <Listing />
            </div>
        </section>
    );
}