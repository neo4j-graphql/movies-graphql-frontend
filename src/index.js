import React from 'react'
import ReactDOM from 'react-dom'
import MovieIndex from './components/MovieIndex'
import MovieDetails from './components/MovieDetails'
import { Router, Route, browserHistory } from 'react-router'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import 'tachyons'
import './index.css'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://45.55.58.94:7474/graphql/',
    opts:{
      headers: {
        Authorization: "Basic Z3JhcGhxbDpncmFwaHFs"
      }
    }
  })
})

ReactDOM.render((
  <ApolloProvider client={client}>
    <Router history={browserHistory}>
      <Route path='/' component={MovieIndex} />
      <Route path='/detail/:movieId' component={MovieDetails} />
    </Router>
  </ApolloProvider>
  ),
  document.getElementById('root')
)
