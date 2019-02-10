import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { DragSource } from 'react-dnd'

import { Button } from '../../ui'

import { ItemTypes } from '../../../redux/constants/dragConstants'

import styles from './imageItem.css'
import { deleteImgFromScene } from '../../../redux/actions/addLogoActions'

function mapStateToProps(state) {
    return {
        ...state,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ deleteImgFromScene }, dispatch)
}

const logoSource = {
    beginDrag(props) {
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

@connect(
    mapStateToProps,
    mapDispatchToProps,
)
@DragSource(ItemTypes.PLACED_LOGO, logoSource, collect)
class ImageItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showButton: false,
        }
    }
    _removeItem = () => {
        this._toggleBtn()
        this.props.deleteImgFromScene(this.props.groupIndex)
    }
    _toggleBtn = () => {
        this.setState({
            showButton: !this.state.showButton,
        })
    }
    render() {
        const { src, x, y, connectDragSource, isDragging } = this.props
        const style = { left: x, top: y, width: '40px', height: '40px', opacity: isDragging ? 0.3 : 1 }
        const deleteBtn = (
            <div className={styles.imgItemBoxAction}>
                <Button type="warning" onClickCallback={this._removeItem} small>
                    Delete
                </Button>
            </div>
        )
        return connectDragSource(
            <div className={styles.imgItem} style={style}>
                <div className={styles.imgItemBox}>
                    <img onClick={this._toggleBtn} src={src} alt="" />
                    {this.state.showButton ? deleteBtn : null}
                </div>
            </div>,
        )
    }
}

export default ImageItem
