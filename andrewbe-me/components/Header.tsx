import MainNav from "./MainNav"

interface HeaderProps{
  isHomePage?: boolean
}

export default function Header({isHomePage = false}: HeaderProps){
  return (
    <header className={`${isHomePage ? `bg-primary` : `bg-white`} shadow-md relative`}>
      <MainNav invertColors={isHomePage} />
      {/* {isHomePage ?
        (
          null
        ) : (
          <div className="gradient-line absolute bottom-0 w-full h-4"></div>
        )
    } */}

    </header>
    )
}
