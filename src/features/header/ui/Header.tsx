import "./Header.css"

function Header(){
    return(
        <header className="header">
          <a href="public.html">Главная</a>
          <a href="public.html">Каталог</a>
          <a href="public.html">Подписка</a>
          <a href="public.html">Личный кабинет</a>
          <p style={{width: 150 +'px'}}></p>
      </header>
    )
}

export default Header