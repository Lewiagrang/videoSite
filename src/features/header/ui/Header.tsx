import "./Header.css"

function Header(){
    return(
        <header className="header">
          <a href="/">Главная</a>
          <a href="/">Каталог</a>
          <a href="/">Подписка</a>
          <a href="/">Личный кабинет</a>
          <p style={{width: 150 +'px'}}></p>
      </header>
    )
}

export default Header