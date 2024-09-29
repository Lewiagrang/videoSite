import "./MainFilms.scss"
import { useEffect, useState } from "react";
import { MainCard } from "ents/main-film/index"

interface IcardMain {
    urlImg?: string;
    year?: string;
    rating?: string;
    title?:  string;
    map: any;
  }

function MainFilms(){

      
  const [state, setState] = useState<IcardMain>([]);

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


    let listItems = state.map((cardMain)=>
        <MainCard url={cardMain.urlImg} rating={cardMain.rating} year={cardMain.year} title={cardMain.title}/>
    )
    return(
    <div className="main-films">
        {listItems}
    </div>
    )
}

export default MainFilms
