const { ApolloServer, gql } = require("apollo-server")

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

const resolvers = {
  Query: {
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
