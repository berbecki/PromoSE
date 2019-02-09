import React from 'react'

import { DragSource } from 'react-dnd'

import { ItemTypes } from '../../redux/constants/dragConstants'

const logoSource = {
    beginDrag(props) {
        return {
            src: props.src,
            index: props.index,
        }
    },
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    }
}

const LogoItem = ({ connectDragSource, isDragging, src }) => {
    return connectDragSource(
        <li
            style={{
                opacity: isDragging ? 0.5 : 1,
            }}
        >
            <img width={40} src={src} alt={src} />
        </li>,
    )
}

export default DragSource(ItemTypes.LOGO, logoSource, collect)(LogoItem)
