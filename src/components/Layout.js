import React from 'react'

function Layout({ children }) {
    console.log("children.length  ", children[1])
    return (
        <React.Fragment>
            <section className='main--container'>
                <section className='container--form'>
                    {children[0]}
                </section>
                <section className='container--list'>
                    {!children[1].props.resultApi.name && <span className='icon-data'></span>}
                    {children[1]}
                </section>
            </section>
        </React.Fragment>
    )
}

export default Layout
