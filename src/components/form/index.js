import React from 'react';


export default function Form({ handleSubmit, handleChange, novaDemanda }){
    return(
        <form onSubmit={handleSubmit} action='#' className='form'>
            <input 
                onChange={handleChange} 
                type='text'
                value={novaDemanda}
            />
            <button type='submit'>Add</button>
        </form>
    )
}


// Form.PropTypes = {
//     handleSubmit: PropTypes.func.isRequired,
//     handleChange: PropTypes.func.isRequired,
//     novaDemanda: PropTypes.string.isRequired
// }