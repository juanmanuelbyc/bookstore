import React from 'react';

function BookCard(props) {

  const {title, author, cathegory, currentChapter, progressPercentage} = props;

  return (
    <div className="bookCard">
      <div className="bookInfoAndOptions">
        <div className="bookInfo">
          <h4>{cathegory}</h4>
          <h3>{title}</h3>
          <h4>{author}</h4>
        </div>
        <div className="optionsButtons">
          <button type='button'>Comments</button>
          <button type='button'>Remove</button>
          <button type='button'>Edit</button>
        </div>
      </div>
      <div className="bookProgress">
        <div className="percentageProgress">
          <div className='percentageImage'></div>
          <div className='pewrcentageInfo'>
            <h2>{progressPercentage}</h2>
            <h4>completed</h4>
          </div>
        </div>
        <div className="progressInfo">
          <h4>Current chapter</h4>
          <h3>{currentChapter}</h3>
          <button type='button'>UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;