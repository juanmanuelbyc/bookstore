// categories.js

// Actions
const CHECK_CATEGORIES = 'bookstore/categories/CHECK_CATEGORIES';

// Reducer
const initialState = [];
export default function categoriesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHECK_CATEGORIES: {
      return 'Under construction';
    }
    default: return state;
  }
}

// Action Creators
export function checkCategories() {
  return { type: CHECK_CATEGORIES };
}
