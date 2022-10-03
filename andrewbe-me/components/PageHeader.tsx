interface PageHeaderProps{
  pageTitle: string
  twClass?: string | ''
}

export default function PageHeader({pageTitle, twClass}: PageHeaderProps){
    return(
      <h1 className={`font-worksans ${twClass}`}>
            {pageTitle}
        </h1>
    )
}