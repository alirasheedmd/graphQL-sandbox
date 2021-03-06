import express from "express"
import { graphqlHTTP } from "express-graphql"
import schema from "./schema.js"
import cors from "cors"

const app = express()

app.use(cors())

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

app.listen(5000, () => {
  console.log("listening on port 5000")
})
