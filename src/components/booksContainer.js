import React from 'react';
import PropTypes from 'prop-types';
import BookCard from './bookCard';

function BooksContainer(props) {
  const { list } = props;
  const booksCards = list.map((item) => (
    <BookCard
      key={item.id}
      id={item.id}
      title={item.title}
      author={item.author}
      cathegory={item.cathegory}
      currentChapter={item.currentChapter}
      progressPercentage={item.progressPercentage}
    />
  ));

  return (
    <div className="booksContainer">
      <h2 className="listOfBooksTitle">List of books</h2>
      {booksCards}
    </div>
  );
}

export default BooksContainer;

BooksContainer.propTypes = {
  list: PropTypes.arrayOf(Object).isRequired,
};
