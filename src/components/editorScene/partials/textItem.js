import React, { Component } from 'react'
import { DragSource } from 'react-dnd'
import classNames from 'classnames'

import { ItemTypes } from '../../../redux/constants/dragConstants'

import styles from './textItem.css'

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

@DragSource(ItemTypes.PLACED_LOGO, textSource, collect)
class TextItem extends Component {
    render() {
        const {
            position: { x: left, y: top },
            size: { width, height },
            format: { color, fontSize, fontFamily },
            content,
            connectDragSource,
        } = this.props
        const styl = {
            left: `${left}px`,
            top: `${top}px`,
            width,
            height,
            color,
            fontSize,
        }
        const classes = classNames(styles.textItem, {
            [styles.fontArial]: fontFamily === 'arial',
            [styles.fontTimes]: fontFamily === 'times',
            [styles.fontOpensans]: fontFamily === 'opensans',
        })
        return connectDragSource(
            <div style={styl} className={classes}>
                <span>{content}</span>
            </div>,
        )
    }
}

export default TextItem
