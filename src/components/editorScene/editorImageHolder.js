import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'
import { ItemTypes } from '../../redux/constants/dragConstants'

import ImageItem from './imageItem'

import styles from './editorImageHolder.css'
import { bindActionCreators } from 'redux'
import { updateImgOnScene } from '../../redux/actions/backgroundSelectorActions'

function mapStateToProps(state) {
    return {
        ...state,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateImgOnScene }, dispatch)
}

const boxTarget = {
    drop(props, monitor, component) {
        if (!component) {
            return
        }
        const item = monitor.getItem()
        const delta = monitor.getDifferenceFromInitialOffset()
        const left = Math.round(item.x + delta.x)
        const top = Math.round(item.y + delta.y)

        component.moveElement(item.groupIndex, left, top)
    },
}

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
    }
}

@connect(
    mapStateToProps,
    mapDispatchToProps,
)
@DropTarget(ItemTypes.PLACED_LOGO, boxTarget, collect)
class EditorImageHolder extends Component {
    moveElement(index, x, y) {
        this.props.updateImgOnScene(index, x, y)
    }
    render() {
        const { logo } = this.props.project
        const { connectDropTarget } = this.props
        if (logo.length > 0) {
            return connectDropTarget(
                <div className={styles.editorImageHolder}>
                    {logo.map((element, i) => {
                        return <ImageItem key={i} {...element} groupIndex={i} />
                    })}
                </div>,
            )
        }
        return null
    }
}

export default EditorImageHolder
