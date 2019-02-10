import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'
import { ItemTypes } from '../../redux/constants/dragConstants'

import ImageItem from './partials/imageItem'
import TextItem from './partials/textItem'

import styles from './editorImageHolder.css'
import { bindActionCreators } from 'redux'
import { updateImgOnScene } from '../../redux/actions/addLogoActions'
import { updateTextPositionOnScene } from '../../redux/actions/addTextActions'

function mapStateToProps(state) {
    return {
        ...state,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateImgOnScene, updateTextPositionOnScene }, dispatch)
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

        component.moveElement(item.type, item.groupIndex, left, top)
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
    moveElement(type, index, x, y) {
        if (type === 'TEXT') {
            this.props.updateTextPositionOnScene(x, y)
        }
        this.props.updateImgOnScene(index, x, y)
    }
    render() {
        const { logo, text } = this.props.project
        const { connectDropTarget } = this.props
        if (logo.length > 0 || text) {
            return connectDropTarget(
                <div className={styles.editorImageHolder}>
                    {logo.map((element, i) => {
                        return <ImageItem key={i} {...element} groupIndex={i} />
                    })}
                    {text ? <TextItem {...text} /> : null}
                </div>,
            )
        }
        return null
    }
}

export default EditorImageHolder
