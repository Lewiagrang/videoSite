import "./PremiumFilms.scss"
import { PremiumFilm } from "ents/premium-film/index"



function PremiumFilms() {
    return(
    <div className="premium-films">
            <PremiumFilm/>
            <PremiumFilm/>
            <PremiumFilm/>
    </div>
    )
}

export default PremiumFilms 
