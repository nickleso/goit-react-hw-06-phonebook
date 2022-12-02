import { createSlice } from '@reduxjs/toolkit';

const filterInitialSlice = { value: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialSlice,
  reducers: {
    filterContacts: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// Selectors
export const getFilter = state => state.filter.value;
