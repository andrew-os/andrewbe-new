import Button from "./Button"
import MainNav from "./MainNav"

interface HeaderProps{
  isHomePage?: boolean
}

export default function Header({isHomePage = false}: HeaderProps){
  return (
    <header className={`${isHomePage ? `bg-primary` : `bg-white shadow-md `} relative`}>
      <div className="flex flex-row items-center">
        <MainNav invertColors={isHomePage} />
        <Button
          isLink={true}
          classes={`${isHomePage ? `text-white` : `text-primary`} md:ml-16 text-xl`}
          href="contact" text="Lets Chat"
          hasArrow={true}
          arrowColor={isHomePage ? `text-white` : `text-primary`} />
      </div>
      {isHomePage ?
        (
          null
        ) : (
          <div className="gradient-line absolute bottom-0 w-full h-4"></div>
        )
    }

    </header>
    )
}
