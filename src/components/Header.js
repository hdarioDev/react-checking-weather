import React from 'react'

function Header({ title }) {
    return (
        <React.Fragment>
            <header>
                <h1> {title}</h1>
            </header>
        </React.Fragment>
    )
}

export default Header
