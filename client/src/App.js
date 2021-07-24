import "./App.css"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client"
import Launches from "./components/Launches.jsx"
import { Component } from "react"

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
})

export class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <h1>SpaceX</h1>
          <Launches />
        </div>
      </ApolloProvider>
    )
  }
}

export default App
