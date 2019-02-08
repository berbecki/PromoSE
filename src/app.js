import React, { Component } from 'react'

import { Button } from './components/ui'

import './styles/reset.css'
import './styles/variables.css'

import styles from './styles/app.css'

class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                <div className={styles.backgroundSelector}>
                    <h2>Select Background</h2>
                    <ul className={styles.backgroundSelectorList}>
                        <li>
                            <img src="https://source.unsplash.com/random/100x60" alt="" />
                        </li>
                        <li>
                            <img src="https://source.unsplash.com/random/100x60" alt="" />
                        </li>
                        <li>
                            <img src="https://source.unsplash.com/random/100x60" alt="" />
                        </li>
                        <li>
                            <img src="https://source.unsplash.com/random/100x60" alt="" />
                        </li>
                    </ul>
                    <Button>Delete Background</Button>
                </div>
                <div className={styles.editorHeader}>
                    <h1>Simple Editor</h1>
                </div>
                <div className={styles.editor}>
                    <div>
                        <div className={styles.editorArea} />
                    </div>
                </div>
                <div className={styles.editorAction}>
                    <Button type={'action'}>download as image</Button>
                </div>
                <div className={styles.addLogo}>
                    <h2>Add logo</h2>
                    <ul className={styles.logoList}>
                        <li>
                            <img width={40} src="/images/logo_one.png" alt="" />
                        </li>
                        <li>
                            <img width={40} src="/images/logo_two.png" alt="" />
                        </li>
                        <li>
                            <img width={40} src="/images/logo_three.png" alt="" />
                        </li>
                    </ul>
                    <h2>Add text</h2>
                    <input className={styles.baseInput} type="text" />
                    <div className={styles.baseRadios}>
                        <input type="radio" value="arial" name="fontfamily" /> Arial <br />
                        <input type="radio" value="roman" name="fontfamily" /> Times New Roman <br />
                        <input type="radio" value="opensans" name="fontfamily" /> Open Sans
                    </div>
                    <Button block>Add text</Button>
                </div>
                <div className={styles.appActions}>
                    <Button type={'action'}>Save</Button> <Button>Load</Button>
                </div>
            </div>
        )
    }
}

export default App
