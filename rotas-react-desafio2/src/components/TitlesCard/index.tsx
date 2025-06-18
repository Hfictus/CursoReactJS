




type Props = {
    title: string;
}

export default function TitlesCard({ title } : Props) {
    return(
        <div className="container">
            <h1 className="titles">{title}</h1>
        </div>
    );
}