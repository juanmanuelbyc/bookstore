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
    <div className="App Bookstore-CMS">
      <div className="panel-general">
        <header>
          <span className="Bookstore-CMS-Text Text-Style-5">Bookstore CMS</span>
          <Link to="/" className="BOOKS Text-Style-3">BOOKS</Link>
          <Link to="/categories" className="CATEGORIES Text-Style-3">CATEGORIES</Link>
          <div className="userIcon" />
        </header>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
