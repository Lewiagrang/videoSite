import { useTheme } from "app/providers/ThemeProvider"
import "./Header.scss"
import heartSVG from "shared/assets/icons/heart.svg" 
import homeSVG from "shared/assets/icons/home.svg"
import catalogSVG from "shared/assets/icons/catalog.svg"
import profileSVG from "shared/assets/icons/profile.svg"
import themeSVG from "shared/assets/icons/theme.svg"
import { classNames } from "shared/lib/classNames/classNames"


function Header(){

    const {theme, toggleTheme} = useTheme()

    return(
        <header className={classNames("header", {}, [theme!])}>
          <a href="/">
            <img className="heartSVG" src={heartSVG} ></img>
          </a>
          <a href="/">
            <img className="homeSVG" src={homeSVG}/>
          </a>
          <a href="/">
            <img className="catalogSVG" src={catalogSVG}/>
          </a>
          <a href="/">
            <img className="profileSVG" src={profileSVG}/>
          </a>
          <p style={{width: 150 +'px'}}></p>
          <a onClick={toggleTheme}>
            <img className="themeSVG" src={themeSVG}/>
          </a>
          <p style={{width: 30 +'px'}}></p>
      </header>
    )
}

export default Header