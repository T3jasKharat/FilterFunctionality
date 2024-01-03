// src/actions/index.js
export const setApiData = (data) => ({
  type: "SET_API_DATA",
  payload: data,
});

export const setFilters = (filters) => ({
  type: "SET_FILTERS",
  payload: filters,
});
