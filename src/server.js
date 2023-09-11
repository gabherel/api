//trazendo o que tem dentro da pasta express
const express = require('express')

const app = express()

// ("/") é utilizado para ir direto para o root
app.get('/message/:id/:user', (request, response) => {
  //request get the value of the params
  const { id, user } = request.params

  response.send(`
  Id da mensagem é ${id}
  Para o usuário: ${user}
  `)
})


app.get('/users', (request, response) => {
  const { page, limit } = request.query

  response.send(`
  Pagina: ${page}
  Limite: ${limit}
  `)
})


const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))
