import React, { Fragment } from 'react'
import ReactDom from 'react-dom'

import 'bootswatch/dist/lux/bootstrap.min.css';

import List from './containers/List'

const App = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-dark bg-dark border-bottom border-white">
                <a href="/" className="navbar-brand">MovieApp</a>
            </nav>
            <main className="bg-dark">
                <div className="container">
                    <List />
                </div>
            </main>
        </Fragment>
    )
}

ReactDom.render(<App />, document.getElementById('root'))