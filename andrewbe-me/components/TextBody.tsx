interface TextProps{
    text: string
}

export default function TextBody({text}: TextProps){
    return (
        <p>{text}</p>
    )
}