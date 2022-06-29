interface PageHeaderProps{
    pageTitle: string
}

export default function PageHeader({pageTitle}: PageHeaderProps){
    return(
        <h1 className="font-ultra text-7xl text-primary">
            {pageTitle}
        </h1>
    )
}