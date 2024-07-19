import './Main.css'
import Header from "features/header/ui/Header"
import PremiumFilms from 'widgets/premium-films/ui/PremiumFilms';
import MainFilms from 'widgets/main-films/ui/MainFilms';

function Main() {
    return (
      <div className="main">
        <Header/>
      <main className="main">
              <PremiumFilms/>
              <MainFilms/>
      </main>
      </div>
    );
  }
  
  export default Main;
  
  