



type Props = {
    text: string;
}

export default function StartButton( { text } : Props) {
    return(
        <div className="buttons">
            {text}
        </div>
    );
}