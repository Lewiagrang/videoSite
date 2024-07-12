import "./PremiumFilms.css"
import PremiumFilm from "entities/premium-film/ui/PremiumFilm"

function PremiumFilms(){
    return(
    <div className="premium-films">
            <PremiumFilm/>
            <PremiumFilm/>
            <PremiumFilm/>
            <PremiumFilm/>
            <PremiumFilm/>
            <PremiumFilm/>
    </div>
    )
}

export default PremiumFilms