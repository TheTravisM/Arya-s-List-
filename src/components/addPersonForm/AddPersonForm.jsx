import React, { useRef } from "react";
import PropTypes from 'prop-types';
import './AddPersonForm.scss'

const AddPersonForm = (props) => {
  const personInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addPerson(personInput.current.value);
    event.currentTarget.reset();
  }

  return (
    <form 
      className='addPersonForm'
      onSubmit = {(event) => handleSubmit(event)}
    >
      {console.log(personInput)}
      <input
        type='text'
        ref={personInput}
        placeholder = "Enter a person's name"
      />
      <input
        type='submit'
        value='Add A Name'
      />
    </form>
  );
}

AddPersonForm.propTypes = {
  addPerson: PropTypes.func.isRequired
};

export default AddPersonForm;