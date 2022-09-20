// books.js
const booksList = [
  {
    cathegory: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    progressPercentage: '64%',
    currentChapter: 'Chapter 15',
  },
  {
    cathegory: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    progressPercentage: '8%',
    currentChapter: 'Chapter 3',
  },
  {
    cathegory: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    progressPercentage: '0%',
    currentChapter: 'Introduction',
  },
];
// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// Reducer
export default function booksReducer(state = booksList, action = {}) {
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
