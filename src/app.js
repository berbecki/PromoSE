import React, { Component } from 'react'

import './styles/reset.css'
import './styles/variables.css'

import styles from './styles/app.css'

class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                <h1>Simple editor</h1>
            </div>
        )
    }
}

export default App
