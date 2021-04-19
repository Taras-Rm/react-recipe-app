import React from 'react'

const Form = (props) => {
    return (
        <form className='form' onSubmit={props.recipeSearch}>
            <input className='form_input' name='form_input' type='text'></input>
            <button className='form_btn'>Search</button>
        </form>
    )
}

export default Form;