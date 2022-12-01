import { createSlice } from '@reduxjs/toolkit';

const filterInitialSlice = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialSlice,
  reducers: {
    filterContacts: {
      reducer(state, action) {
        state = action.payload;
      },
      prepare(name) {
        return {
          payload: {
            name,
          },
        };
      },
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// Selectors
export const getFilter = state => state.filter;
