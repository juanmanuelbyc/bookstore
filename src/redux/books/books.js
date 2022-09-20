// books.js

// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// Reducer
export default function booksReducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.title !== action.bookTitle);
    default: return state;
  }
}

// Action Creators
export function addBook(book) {
  return { type: ADD_BOOK, book };
}

export function removeBook(bookTitle) {
  return { type: REMOVE_BOOK, bookTitle };
}
