/**
 * Persist state in localStorage
 *
 * @param {string} key - key for localStorage
 * @returns {object} initialsState - initialsState for store
 * @returns {function} persistStateMiddleware - middleware for store
 *
 */
export const persistState = (key) => ({
  initialState: JSON.parse(localStorage.getItem(key)) || {},

  persistStateMiddleware: (store) => (next) => (action) => {
    const result = next(action);
    localStorage.setItem(key, JSON.stringify(store.getState()));
    return result;
  },
});
