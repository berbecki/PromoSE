import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import domtoimage from 'dom-to-image'
import FileSaver from 'file-saver'

import store from './store'

import BackgroundSelector from './components/backgroundSelector/backgroundSelector'
import EditorScene from './components/editorScene/editorScene'
import LogosList from './components/logosList/logosList'
import TextAdder from './components/textAdder/textAdder'
import SaveLoad from './components/saveLoad/saveLoad'

import { Button } from './components/ui'

import './styles/reset.css'
import './styles/variables.css'

import styles from './styles/app.css'

class App extends Component {
    _saveToImg = () => {
        const node = document.getElementById('dom_to_img')
        domtoimage
            .toBlob(node)
            .then(function(blob) {
                FileSaver.saveAs(blob, 'my-project.png')
            })
            .catch(function(error) {
                console.error('oops, something went wrong!', error)
            })
    }
    render() {
        return (
            <Provider store={store}>
                <DragDropContextProvider backend={HTML5Backend}>
                    <div className={styles.app}>
                        <BackgroundSelector />
                        <div className={styles.editorHeader}>
                            <h1>Simple Editor</h1>
                        </div>
                        <div id="dom_to_img" className={styles.editor}>
                            <EditorScene />
                        </div>
                        <div className={styles.editorAction}>
                            <Button type={'action'} onClickCallback={this._saveToImg}>
                                download as image
                            </Button>
                        </div>
                        <div className={styles.addLogo}>
                            <h2>Add logo</h2>
                            <LogosList />
                            <TextAdder title="Add text" />
                        </div>
                        <SaveLoad />
                    </div>
                </DragDropContextProvider>
            </Provider>
        )
    }
}

export default App
