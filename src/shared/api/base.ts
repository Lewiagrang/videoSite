import fs from 'fs'
const axios = require('axios').default;

axios({
  method: 'get',
  url: 'http://bit.ly/2mTM3nY',
  responseType: 'stream'
})
  .then(function (response: any) {
    response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
  });