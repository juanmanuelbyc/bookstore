import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function BookCard(props) {
  const {
    id,
    title,
    author,
    category,
    currentChapter,
    progressPercentage,
  } = props;

  const dispatch = useDispatch();

  const remove = (e) => {
    e.preventDefault();
    dispatch(removeBook(id));
  };

  return (
    <div className="bookCard">
      <div className="bookInfoAndOptions">
        <div className="bookInfo">
          <h4>{category}</h4>
          <h3>{title}</h3>
          <h4>{author}</h4>
        </div>
        <div className="optionsButtons">
          <button type="button">Comments</button>
          <button type="button" onClick={remove}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="bookProgress">
        <div className="percentageProgress">
          <div className="percentageImage" />
          <div className="pewrcentageInfo">
            <h2>{progressPercentage}</h2>
            <h4>completed</h4>
          </div>
        </div>
        <div className="progressInfo">
          <h4>Current chapter</h4>
          <h3>{currentChapter}</h3>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;

BookCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  currentChapter: PropTypes.string.isRequired,
  progressPercentage: PropTypes.string.isRequired,
};
