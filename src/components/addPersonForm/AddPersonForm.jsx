import React, { useState } from "react";
import './addPersonForm.scss'

const AddPersonForm = (props) => {
  //const { addPerson } = props;
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addPerson(value);
    setValue("");
  }

  return (
    <form 
      className='addPersonForm'
      onSubmit = {(event) => handleSubmit(event)}
    >
      {console.log('value : ', value)}
      <input
        type='text'
        value={value}
        placeholder = "Enter a person's name"
        onChange={(event) => setValue(event.target.value)}
      />
      <input
        type='submit'
        value='Add A Name'
      />
    </form>
  );
}
export default AddPersonForm;