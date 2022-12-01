import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import css from './App.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  function onFilterChange(event) {
    const name = event.currentTarget.value;
    // trim
    dispatch(filterContacts(name));
  }

  return (
    <div className={css.form}>
      <label className={css.form__label}>
        Find contacts by name
        <input name="filter" onChange={onFilterChange}></input>
      </label>
    </div>
  );
};

export default Filter;
