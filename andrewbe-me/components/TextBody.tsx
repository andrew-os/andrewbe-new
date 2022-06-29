interface TextProps{
    children: React.ReactNode|React.ReactNode[];
}

export default function TextBody({children}: TextProps){
    return (
        <p className="font-slabo text-zinc-800">{children}</p>
    )
}