import './Main.scss'
import { Header } from "features/header/index"
import { PremiumFilms } from 'widgets/premium-films/index';
import { MainFilms }from 'widgets/main-films/index';

function Main() {
    return (
      <div className="main">
        <Header/>
      <main className="main">
              {/* <PremiumFilms/> */}
              <MainFilms/>
      </main>
      </div>
    );
}
  
  export default Main;
  
  