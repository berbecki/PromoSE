import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from '../../styles/app.css'
import { Button } from '../ui'
import { bindActionCreators } from 'redux'
import { addTextToScene, updateTextOnScene } from '../../redux/actions/addTextActions'

function mapStateToProps(state) {
    return {
        ...state,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addTextToScene, updateTextOnScene }, dispatch)
}

@connect(
    mapStateToProps,
    mapDispatchToProps,
)
class TextAdder extends Component {
    _saveFormData = event => {
        event.preventDefault()
        const data = new FormData(event.target)
        const textData = {
            content: data.get('imgText'),
            format: {
                fontFamily: data.get('fontFamily'),
                fontSize: '20px',
                color: '#fff',
            },
            position: {
                x: 100,
                y: 190,
            },
            size: {
                width: '200px',
                height: 'auto',
            },
        }
        if (this.props.project.text) {
            this.props.updateTextOnScene(textData)
        } else {
            this.props.addTextToScene(textData)
        }
    }
    render() {
        const {
            title,
            project: { text },
        } = this.props
        const buttonText = text ? 'Update text' : 'Add text'
        const textValue = text ? text.content : ''
        return (
            <div>
                <h2>
                    {title} <sup>*</sup>
                </h2>
                <form onSubmit={this._saveFormData}>
                    <input
                        placeholder="Text"
                        name="imgText"
                        className={styles.baseInput}
                        defaultValue={textValue}
                        type="text"
                        required
                    />
                    <div className={styles.baseRadios}>
                        {/* TODO: selected item when content should be updated */}
                        <div>
                            <label>
                                <input type="radio" value="arial" name="fontFamily" defaultChecked={true} /> Arial
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" value="times" name="fontFamily" /> Times New Roman
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" value="opensans" name="fontFamily" /> Open Sans
                            </label>
                        </div>
                    </div>
                    {/* TODO: add color picker and bold, italic, underline option */}
                    <Button block formButton>
                        {buttonText}
                    </Button>
                </form>
            </div>
        )
    }
}

export default TextAdder
