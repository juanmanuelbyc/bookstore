// books.js

// Actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// Reducer
export default function booksReducer(state = {}, action = {}) {
  switch (action.type) {
    case ADD_BOOK: {
      const newBook = action.book;
      return { ...state, newBook };
    }
    case REMOVE_BOOK: {
      const bookToRemove = action.bookTitle;
      return state.filter((book) => book.title !== bookToRemove);
    }
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
