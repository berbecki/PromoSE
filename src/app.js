import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'

import BackgroundSelector from './components/backgroundSelector/backgroundSelector'
import EditorScene from './components/editorScene/editorScene'

import { Button } from './components/ui'

import './styles/reset.css'
import './styles/variables.css'

import styles from './styles/app.css'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className={styles.app}>
                    <BackgroundSelector />
                    <div className={styles.editorHeader}>
                        <h1>Simple Editor</h1>
                    </div>
                    <div className={styles.editor}>
                        <EditorScene />
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
            </Provider>
        )
    }
}

export default App
