import React from 'react';
import BookCard from './bookCard';

function BooksContainer(props) {

const {list} = props;

 return (
  <div className="booksContainer">
  <h2 className='listOfBooksTitle'>List of books</h2>
  {list.map(item => (
    <BookCard
      title={item.title}
      author={item.author}
      cathegory={item.cathegory}
      currentChapter={item.currentChapter}
      progressPercentage={item.progressPercentage}
    />
  ))}
  </div>
  );
}

export default BooksContainer;