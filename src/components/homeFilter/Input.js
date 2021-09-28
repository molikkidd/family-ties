import React from 'react'

const Input = (props) => {
    return (
        <div >
            <label htmlFor="name-filter" ></label>
            <input type="text" 
            name="name-filter" 
            value={props.value} 
            onChange={props.onChange}
            className="homeInput"
            placeholder="Last Name:"
            />
        </div>
    )
}

export default Input;