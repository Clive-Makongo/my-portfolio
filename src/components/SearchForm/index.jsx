import React from 'react';
import './style.css';

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message me:
        </label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="breed"
          list="breeds"
          type="text"
          className="form-control"
          placeholder="Type your message here"
          id="input-message"
        />
        
        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-success"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
