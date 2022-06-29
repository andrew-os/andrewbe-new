interface PageHeaderProps{
    pageTitle: string
}

export default function PageHeader({pageTitle}: PageHeaderProps){
    return(
        <h1 className="font-ultra md:text-7xl text-5xl text-black">
            {pageTitle}
        </h1>
    )
}