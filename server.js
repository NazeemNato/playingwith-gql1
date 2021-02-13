const express = require('express')
const { graphqlHTTP } =  require('express-graphql')
const schema = require('./schema')

const app = express()
const PORT = process.env.PORT || 6969


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`🚀 Server running at https://localhost:${PORT}`)
})