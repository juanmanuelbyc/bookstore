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
          <span className="School-of">{category}</span>
          <span className="Title">{title}</span>
          <span className="Author">{author}</span>
        </div>
        <div className="optionsButtons">
          <button type="button" className="optionButton">Comments</button>
          <hr className="optionButtonSeparator"/>
          <button type="button" className="optionButton" onClick={remove}>Remove</button>
          <hr className="optionButtonSeparator"/>
          <button type="button"className="optionButton">Edit</button>
        </div>
      </div>
      <div className="bookProgress">
        <div className="percentageProgress">
          <div className="percentageImage" />
          <div className="percentageInfo">
            <span className="Percent-Complete">{progressPercentage}</span>
            <span className="Completed">Completed</span>
          </div>
        </div>
        <hr className="progressSeparator"/>
        <div className="progressInfo">
          <span className="Current-Chapter">CURRENT CHAPTER</span>
          <span className="Current-Lesson">{currentChapter}</span>
          <button type="button" className="Update-Button">UPDATE PROGRESS</button>
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
