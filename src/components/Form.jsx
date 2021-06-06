import React from 'react';

const Form = (props) => {
  return (
    <form className="form" onSubmit={props.recipeSearch}>
      <h2>Enter name of recipe:</h2>
      <input className="form_input" name="form_input" type="text"></input>
      <button className="form_btn">Search</button>
    </form>
  );
};

export default Form;
