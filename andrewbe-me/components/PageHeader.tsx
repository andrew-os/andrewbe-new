interface PageHeaderProps{
    pageTitle: string
}

export default function PageHeader({pageTitle}: PageHeaderProps){
    return(
        <h1 className="font-ultra text-6xl">
            {pageTitle}
        </h1>
    )
}