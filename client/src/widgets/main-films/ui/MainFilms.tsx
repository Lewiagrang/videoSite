import "./MainFilms.scss"
import { useEffect, useState } from "react";
import { MainFilm } from "ents/main-film/index"



function MainFilms(){

      
  const [state, setState] = useState([]);

    const callBackendAPI = async () => {
        const response = await fetch('http://localhost:5000/cardmain');
        const body = await response.json();

        if (response.status !== 200) {
        throw Error(body.message)
        }
        return body;
    };
    

    useEffect(() => {
        callBackendAPI()
        .then(res => setState(res))
        .catch(err => console.log(err));
    }, [])


    let listItems = state.map((urlImg)=>
        <MainFilm url={urlImg[0]} rating={urlImg[1]} year={urlImg[2]} />
    )
    return(
    <div className="main-films">
        {listItems}
    </div>
    )
}

export default MainFilms
