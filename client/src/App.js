import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

//components
import BookList from './Components/BookList.js';
import AddBook from './Components/AddBook.js';

//Apollo Client Set-up
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="Main">
          <h1>Reading List</h1>
          <BookList/>
          
          <AddBook/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
