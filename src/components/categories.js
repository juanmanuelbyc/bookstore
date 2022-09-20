import React from 'react';
import { useDispatch } from 'react-redux';
import { checkCategories } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();

  const checkCats = (e) => {
    e.preventDefault();
    dispatch(checkCategories());
  };

  return (
    <div className="categoriesPageContainer">
      <h2>Categories</h2>
      <button type="button" className="checkStatusButton" onClick={checkCats}>Check Status</button>
    </div>
  );
}

export default Categories;
