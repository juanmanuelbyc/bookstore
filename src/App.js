import React from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Link } from 'react-router-dom';
import Categories from './components/categories';
import Books from './components/books';
import { fetchBooksList } from './redux/books/books';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchBooksList());

  return (
    <div className="App">
      <header>
        <h1>Bookstore CMS</h1>
        <nav>
          <Link to="/">Books</Link>
          <hr />
          <Link to="/categories">Categories</Link>
        </nav>
        <button type="button">User</button>
      </header>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
