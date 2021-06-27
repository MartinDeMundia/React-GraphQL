import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'
import App from './components/App'
import { ApolloClient } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {
  ApolloProvider,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://192.168.100.16:4000', 
})
const AUTH_TOKEN = 'auth-token'
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
