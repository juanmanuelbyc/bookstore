import { createAsyncThunk } from '@reduxjs/toolkit';
import { getBooksList, postBook, deleteBook } from '../../APIs/bookstoreApiMethods';

// Initial State
const initialState = [];
// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const ADD_BOOK_FULFILLED = 'bookstore/books/ADD_BOOK/fulfilled';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const REMOVE_BOOK_FULFILLED = 'bookstore/books/REMOVE_BOOK/fulfilled';
const FETCH_LIST = 'bookstore/books/FETCH_LIST';
const FETCH_LIST_FULFILLED = 'bookstore/books/FETCH_LIST/fulfilled';

// Reducer
export default function booksReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_BOOK_FULFILLED:
      return action.payload;
    case REMOVE_BOOK_FULFILLED:
      return action.payload;
    case FETCH_LIST_FULFILLED:
      return action.payload;
    default: return state;
  }
}

// Action Creators

export const fetchBooksList = createAsyncThunk(
  FETCH_LIST,
  async () => getBooksList(),
);

export const addBook = createAsyncThunk(
  ADD_BOOK,
  async (book) => {
    await postBook(book);
    return getBooksList();
  },
);

export const removeBook = createAsyncThunk(
  REMOVE_BOOK,
  async (bookId) => {
    await deleteBook(bookId);
    return getBooksList();
  },
);
