import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from '../../styles/app.css'
import { Button } from '../ui'
import { bindActionCreators } from 'redux'
import { addTextToScene } from '../../redux/actions/addTextActions'

function mapStateToProps(state) {
    return {
        ...state,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addTextToScene }, dispatch)
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
        this.props.addTextToScene(textData)
    }
    render() {
        const { title } = this.props
        return (
            <div>
                <h2>
                    {title} <sup>*</sup>
                </h2>
                <form onSubmit={this._saveFormData}>
                    <input placeholder="Text" name="imgText" className={styles.baseInput} type="text" required />
                    <div className={styles.baseRadios}>
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
                    <Button block formButton>
                        Add text
                    </Button>
                </form>
            </div>
        )
    }
}

export default TextAdder
