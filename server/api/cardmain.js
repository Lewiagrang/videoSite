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
      let yearsAndRatingData = preYearsAndRaiting.map((x)=>[x.replace(/ /g, "").split(/\n/g)[1], x.replace(/ /g, "").split(/\n/g)[2]])
      let yearsAndRating = yearsAndRatingData.map((x)=>[x[0].replace(/.*">/, "").replace(/..span>/, ""), x[1].replace(/.*">/, "").replace(/..span>/, "")])
      
      for(let i = urlsImg.length;  urlsImg[i-1].includes("trailer"); i--){
        urlsImg.pop()
        yearsAndRating.pop()
      }

  
      let cardsArray = urlsImg.map(
        (value, index)=>
            [
              value, 
              yearsAndRating[index][0], 
              yearsAndRating[index][1]
            ]
  
      )
      
  
      return cardsArray
  }

  export default getCardMain