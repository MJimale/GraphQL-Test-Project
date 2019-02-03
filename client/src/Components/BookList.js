import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import {getBooksQuery} from '../Queries/queries.js';

import BookDetails from './BookDetails.js';

class BookList extends Component {
  constructor(props){
        super(props);
        this.state = {
            selected: null
        }
    }
  displayBooks(){
    var data = this.props.data;
    console.log(data);
    if(data.loading){
      return (<div>Loading Books...</div>)
    }else{
      return data.books.map(book =>{
        return(
          <li key={book.id} onClick={ (e) => this.setState({ selected: book.id }) }>{book.name}</li>
          )
      })
    }
  }
  render() {
    return (
      <div>
        <ul id="Book-List">
        {this.displayBooks()}
        </ul>
        <BookDetails bookId={ this.state.selected }/> 
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
