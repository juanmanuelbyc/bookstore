// categories.js

// Actions
const CHECK_CATEGORIES = 'CHECK_CATEGORIES';

// Reducer
export default function categoriesReducer(state = {}, action = {}) {
  switch (action.type) {
    case CHECK_CATEGORIES: {
      return 'Under construction'
    }
    default: return state;
  }
}

// Action Creators
export function checkCategories() {
  return { type: CHECK_CATEGORIES };
}
