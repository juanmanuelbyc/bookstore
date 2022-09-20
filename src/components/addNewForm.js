import React, { useState } from 'react';
import { addBook } from '../redux/books/books';
import store from '../redux/configureStore';

function AddNewForm() {
  const [newBookInfo, SetNewBookInfo] = useState({
    title: '',
    author: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    SetNewBookInfo({
      ...newBookInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    store.dispatch(addBook({
      cathegory: 'Unknown',
      title: newBookInfo.title,
      author: newBookInfo.author,
      progressPercentage: '0%',
      currentChapter: 'Introduction',
    }));
    SetNewBookInfo({
      title: '',
      author: '',
    });
  };

  return (
    <div className="newBookFormContainer">
      <h3>ADD NEW BOOK</h3>
      <form className="newBookForm" onSubmit={handleSubmit}>
        <input className="newBookTitle" name="title" placeholder="Book title" required onChange={handleChange} value={newBookInfo.title} />
        <input className="newBookAuthor" name="author" placeholder="Author" required onChange={handleChange} value={newBookInfo.author} />
        <select className="newBooCategory" placeholder="Category" defaultValue="Category">
          <option value="Category" hidden disabled>Select Category</option>
        </select>
        <input type="submit" value="Add Book" />
      </form>
    </div>
  );
}

export default AddNewForm;
