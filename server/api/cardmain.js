import axios from 'axios'
import HTMLParser from 'node-html-parser'


const getCardMain = async () => {
    const axiosResponse = await axios.request({
          method: "GET",
          url: "https://w140.zona.plus/",
      })
      .catch(err => console.error(err))
      
      const root = HTMLParser.parse(axiosResponse.data);
  
      let forImgs = root.querySelectorAll(".cover-wrap")
      let preUrlsImg = forImgs.map((value)=>value.toString())
      let urlsImg = preUrlsImg.map((value)=>value.replace(/.*https/s, "https").replace(/\jpg.*/s, "jpg"))
  
      let forYearsAndRating = root.querySelectorAll(".desc")
      let preYearsAndRaiting = forYearsAndRating.map((value)=>value.toString())
      let yearsAndRatingData = preYearsAndRaiting.map((value)=>[value.replace(/ /g, "").split(/\n/g)[1], value.replace(/ /g, "").split(/\n/g)[2]])
      let yearsAndRating = yearsAndRatingData.map((value)=>[value[0].replace(/.*">/, "").replace(/..span>/, ""), value[1].replace(/.*">/, "").replace(/..span>/, "")])

      let forTitle = root.querySelectorAll(".description")
      let preTitle = forTitle.map((value)=>value.toString())
      let title = preTitle.map((value)=>value.replace(/.*name">/s, "").replace(/<.*/s, ""))
      
      let forUrlFilm = root.querySelectorAll(".results-item-wrap")
      let preUrlFilm = forUrlFilm.map((value)=>value.toString())
      let urlFilm = preUrlFilm.map((value)=>value.replace(/.*itemprop="url" href="/s, "").replace(/" title.*/s, "")) 

      for(let i = urlsImg.length;  urlsImg[i-1].includes("trailer"); i--){
        urlsImg.pop()
        yearsAndRating.pop()
        title.pop()
        urlFilm.pop()
      }

  
      let cardsArray = urlsImg.map(
        (value, index)=>
            
          Object.fromEntries([
                  ["urlImg", value],
                  ["rating", yearsAndRating[index][0]],
                  ["year", yearsAndRating[index][1]],
                  ["title", title[index]],
                  ["urlFilm", urlFilm[index]]
              ])
            
  
      );
      
  
      return cardsArray
  }

  export default getCardMain