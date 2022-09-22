import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/books';

function AddNewForm() {
  const [newBookInfo, SetNewBookInfo] = useState({
    title: '',
    author: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    SetNewBookInfo({
      ...newBookInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      item_id: uuid(),
      category: 'Unknown',
      title: newBookInfo.title,
      author: newBookInfo.author,
    }));
    SetNewBookInfo({
      title: '',
      author: '',
    });
  };

  return (
    <div className="newBookFormContainer">
      <span className="NewBookFormTitle">ADD NEW BOOK</span>
      <form className="newBookForm" onSubmit={handleSubmit}>
        <input className="newBookTitle NewBookInfo" name="title" placeholder="Book title" required onChange={handleChange} value={newBookInfo.title} />
        <input className="newBookAuthor NewBookInfo" name="author" placeholder="Author" required onChange={handleChange} value={newBookInfo.author} />
        <select className="newBooCategory NewBookInfo" placeholder="Category" defaultValue="Category">
          <option className="defaultOption" value="Category" hidden disabled>Category</option>
        </select>
        <input type="submit" className="submitButton" value="ADD BOOK" />
      </form>
    </div>
  );
}

export default AddNewForm;
