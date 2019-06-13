import React, { useState } from 'react';

const Search = ( { showClear, clearUsers, setAlert, searchUsers } ) => {
    const [ text, setText ] = useState('');

    const onChange = e => setText(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        if ( text === '' ) {
            setAlert('Please enter a Name', 'light');
        } else {
            searchUsers(text);
            setText('');
        }
    };

    return (
        <div>
            <form className={ 'form' } onSubmit={ onSubmit }>
                <input
                    type="text"
                    name={ 'text' }
                    placeholder={ 'Search Users...' }
                    value={ text }
                    onChange={ onChange }/>
                <input
                    type="submit"
                    value={ 'Search' }
                    className={ 'btn btn-dark btn-block' }
                />
            </form>
            { showClear &&
            (<button
                className="btn btn-light btn-block"
                onClick={ clearUsers }
            >Clear</button>) }

        </div>
    );
};

export default Search;
