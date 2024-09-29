import "./PremiumFilms.scss"
import { PremiumCard } from "ents/premium-film/index"



function PremiumFilms() {
    return(
    <div className="premium-films">
            <PremiumCard/>
            <PremiumCard/>
            <PremiumCard/>
    </div>
    )
}

export default PremiumFilms 
