import React from 'react';

function Header({name="Aviation Geek Blog"}) {

    return (
        <>
        <header>
            <h1>{name}</h1>
        </header>
        </>
    );
}

export default Header;