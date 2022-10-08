import Button from "./Button"
import MainNav from "./MainNav"
import Logo from "./Logo"

interface HeaderProps{
  isHomePage?: boolean
}

export default function Header({isHomePage = false}: HeaderProps){
  return (
    <header className={`${isHomePage ? `bg-primary` : `bg-white shadow-md`} relative py-6 md:py-0`}>
      <div className="container mx-auto px-5 md:px-0">
        <div className="flex flex-row items-center">
          <div className="flex-1">
            <Logo width={60} height={56} fillA={`${isHomePage ? `#FFFFFF` : `#F17C3A`}`} fillB={`${isHomePage ? `#FFFFFF` : `#5A3FD9`}`} />
          </div>
            <MainNav invertColors={isHomePage} />
          <Button
            isLink={true}
            classes={`${isHomePage ? `text-white` : `text-primary`} md:ml-16 text-xl header-cta`}
            href="contact"
            hasArrow={true}
            borderColor={`${isHomePage ? `border-white`: `border-primary`}`}
            arrowColor={isHomePage ? `text-white` : `text-primary`}
            text="Lets Chat"/>
        </div>
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
