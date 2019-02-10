import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { DragSource } from 'react-dnd'
import classNames from 'classnames'

import { Button } from '../../ui'

import { ItemTypes } from '../../../redux/constants/dragConstants'

import { deleteTextFromScene } from '../../../redux/actions/addTextActions'

import styles from './textItem.css'

function mapStateToProps(state) {
    return {
        ...state,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ deleteTextFromScene }, dispatch)
}

const textSource = {
    beginDrag(props) {
        return {
            ...props,
            type: 'TEXT',
            x: props.position.x,
            y: props.position.y,
        }
    },
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    }
}

@connect(
    mapStateToProps,
    mapDispatchToProps,
)
@DragSource(ItemTypes.PLACED_LOGO, textSource, collect)
class TextItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showButton: false,
        }
    }
    _removeItem = () => this.props.deleteTextFromScene()
    _toggleBtn = () => {
        this.setState({
            showButton: !this.state.showButton,
        })
    }
    render() {
        const {
            position: { x: left, y: top },
            size: { width, height },
            format: { color, fontSize, fontFamily },
            content,
            connectDragSource,
            isDragging,
        } = this.props
        const styl = {
            left: `${left}px`,
            top: `${top}px`,
            width,
            height,
            color,
            fontSize,
            opacity: isDragging ? 0.3 : 1
        }
        const classes = classNames(styles.textItem, {
            [styles.fontArial]: fontFamily === 'arial',
            [styles.fontTimes]: fontFamily === 'times',
            [styles.fontOpensans]: fontFamily === 'opensans',
        })
        const deleteBtn = (
            <div className={styles.textItemBoxAction}>
                <Button type="warning" onClickCallback={this._removeItem} small>
                    Delete
                </Button>
            </div>
        )
        return connectDragSource(
            <div style={styl} className={classes}>
                <div className={styles.textItemBox}>
                    <span onClick={this._toggleBtn}>{content}</span>
                    {this.state.showButton ? deleteBtn : null}
                </div>
            </div>,
        )
    }
}

export default TextItem
