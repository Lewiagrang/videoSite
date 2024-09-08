import express from 'express'
import cors from 'cors'

import getCardMain from './api/cardmain.js'


const app = express()
const port = 5000

app.use(cors());

app.listen(port, () => console.log(`Server started on port ${port}`)); 

app.get('/cardmain', async (req, res) => {
  const data = await getCardMain();
  res.json(data);         
})


