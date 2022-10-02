interface PageHeaderProps{
    pageTitle: string
}

export default function PageHeader({pageTitle}: PageHeaderProps){
    return(
        <h1 className="font-worksans">
            {pageTitle}
        </h1>
    )
}