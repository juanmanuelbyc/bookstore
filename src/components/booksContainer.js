import React from 'react';
import PropTypes from 'prop-types';
import BookCard from './bookCard';

function BooksContainer(props) {
  const { list } = props;
  const booksCards = list.map((item) => (
    <BookCard
      key={item[0]}
      id={item[0]}
      title={item[1][0].title}
      author={item[1][0].author}
      category={item[1][0].category}
      currentChapter="Introduction"
      progressPercentage="0%"
    />
  ));

  return (
    <div className="booksContainer">
      {booksCards}
    </div>
  );
}

export default BooksContainer;

BooksContainer.propTypes = {
  list: PropTypes.arrayOf(Object).isRequired,
};
