const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Teste para recebimento de requisições')
})

app.post('/update/payment', (req, res) =>{
  console.log(req.body)
  console.log(req.body.paymentMethods)
  res.send("Ok")
})

app.listen(port, () => {
  console.log(`Example app listening in port ${port}`)
})