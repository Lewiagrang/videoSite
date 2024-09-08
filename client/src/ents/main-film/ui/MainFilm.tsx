import './MainFilm.scss'

function MainFilm(props) {
    return(
        <article className="main-film">
            <div className="main-card" style = {{backgroundImage: 'url(' + props.url + ')'}}></div>
            <div className="overview">        
                    <div className='year'>{props.year}</div>
                    {/* <div className="separator"></div> */}
                    <div className='rating'>{props.rating}</div>
            </div>
        </article>
    )
}
export default MainFilm