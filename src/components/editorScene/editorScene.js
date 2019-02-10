import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'
import classNames from 'classnames'

import EditorImageHolder from './editorImageHolder'

import { addImgToScene } from '../../redux/actions/addLogoActions'

import { ItemTypes } from '../../redux/constants/dragConstants'
import styles from './editorScene.css'

const DEFAULT_BACKGROUND = '/images/empty_background.bmp'

function mapStateToProps(state) {
    return {
        ...state,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addImgToScene }, dispatch)
}

const imgTarget = {
    drop(props, monitor, component) {
        const { x: rx, y: ry } = findDOMNode(component).getBoundingClientRect()
        const { x: px, y: py } = monitor.getClientOffset()
        const imgData = { ...monitor.getItem(), x: px - rx, y: py - ry }
        component.saveElement(imgData)
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
@DropTarget(ItemTypes.LOGO, imgTarget, collect)
class EditorScene extends Component {
    saveElement(data) {
        this.props.addImgToScene(data)
    }
    render() {
        const {
            background_image: { source, active },
        } = this.props.project
        const { connectDropTarget, isOver } = this.props
        const sceneClass = classNames(styles.editorArea, {
            [styles.isOver]: isOver,
        })
        const activeBg = source.filter((element, i) => i === active)
        const backgroundImage =
            active > -1
                ? `url(https://images.unsplash.com/photo-${activeBg}?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop)`
                : `url('${DEFAULT_BACKGROUND}')`
        return connectDropTarget(
            <div className={sceneClass} style={{ backgroundImage }}>
                <EditorImageHolder />
            </div>,
        )
    }
}

export default EditorScene
