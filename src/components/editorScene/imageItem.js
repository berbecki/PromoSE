import React, { Component } from 'react'
import { DragSource } from 'react-dnd'

import { ItemTypes } from '../../redux/constants/dragConstants'

import styles from './editorImageHolder.css'

const logoSource = {
    beginDrag(props) {
        console.log('beginDrag', props)
        return {
            ...props,
        }
    },
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    }
}

@DragSource(ItemTypes.PLACED_LOGO, logoSource, collect)
class ImageItem extends Component {
    render() {
        const { src, x, y, connectDragSource } = this.props
        return connectDragSource(
            <div className={styles.imgItem} style={{ left: x, top: y, width: '40px', height: '40px' }}>
                <img src={src} alt="" />
            </div>,
        )
    }
}

export default ImageItem
