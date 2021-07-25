const { ApolloServer, gql } = require("apollo-server")

// When configuring graphQL we will first create Schema using SDL
// Then we will add fields to the query type.

// if we want the response to go in a certain format then the schema should know about it becuase

const typeDefs = gql`
  type User {
    email: String
    avatar: String
    friends: [User]
  }

  type Query {
    me: User!
  }
`

// Resolver fetch the data you want from any source you want. You can use async functions any kind of data.

const resolvers = {
  Query: {
    // the query and query field name in this case it is me it should match the query.
    me() {
      return {
        email: "ali@gmail.com",
        avatar: "http://yoda.com",
        friends: [],
      }
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen(4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
