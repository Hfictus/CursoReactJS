



import Filter from "../Filter";
import Listing from "../Listing";
import "./styles.css";

export default function ListingBody() {
    return(
        <section id="listing-body-section">
            <Filter />
            <Listing />
        </section>
    );
}