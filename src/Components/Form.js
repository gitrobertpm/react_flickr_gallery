import React from 'react';

function Form(props) {
    return(
        <form>
            <input type="text" id="search" placeholder="Search" />
            <button type="submit" id="submit">
                <span role="img" aria-label="Seach Icon">&#x1F50E;</span>
            </button>
        </form>
    );
}

export default Form;