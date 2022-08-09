import axios from 'axios';
import React from 'react';
import  CarouselBook  from './CarouselBook';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books:[]
    }
  }
  
  
  componentDidMount(){
    

    this.handlerBooks();
  }
  handlerBooks=async()=>{
    const booksdata=await axios.get('https://mongodb301.herokuapp.com/books');
     this.setState({
      books:booksdata.data
     })
      
  }

  /* TODO: Make  a GET request to your API to fetch all the books from the database  */

  render() {
    console.log('books',this.state.books)

    /* TODO: render all the books in a Carousel */

    return (
      <div className='book'>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length?(
            <CarouselBook books={this.state.books}/>
        ) : (
          <h3>No Books Found books is Empity :(</h3>
        )}
      </div>
    )
  }
}

export default BestBooks;
