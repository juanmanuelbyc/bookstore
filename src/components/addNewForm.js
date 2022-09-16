import React from 'react';

function AddNewForm() {
  return (
    <div className="newBookFormContainer">
      <h3>ADD NEW BOOK</h3>
      <form className="newBookForm">
        <input className="newBookTitle" placeholder="Book title" />
        <select className="newBooCategory" placeholder="Category">
          <option value="" disabled selected hidden>Category</option>
        </select>
      </form>
    </div>
  );
}

export default AddNewForm;
