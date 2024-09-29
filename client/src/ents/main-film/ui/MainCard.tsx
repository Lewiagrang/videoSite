import './MainCard.scss'

function MainCard(props) {
    return(
        <article className="main-card">
            <div className="img_year_rating" style = {{backgroundImage: 'url(' + props.url + ')'}}>   
                        <div className='year'>{props.year || "___"}</div>
                        <div className='rating'>{props.rating+"⭐" || "___"}</div>
            </div>
            <div style = {{display: 'flex', marginLeft: "10px", width: "200px"}}>
                <div className='title'>{props.title}</div>    
            </div>   
        </article>
        )
}
export default MainCard