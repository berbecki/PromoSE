import React, { Component } from 'react'
import { connect } from 'react-redux'

import styles from './editorScene.css'

const DEFAULT_BACKGROUND = '/images/empty_background.bmp'

function mapStateToProps(state) {
    return {
        ...state,
    }
}

@connect(mapStateToProps)
class EditorScene extends Component {
    render() {
        const {
            background_image: { source, active },
        } = this.props.project
        const activeBg = source.filter((element, i) => i === active)
        const backgroundImage =
            active > -1
                ? `url(https://images.unsplash.com/photo-${activeBg}?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop)`
                : `url('${DEFAULT_BACKGROUND}')`
        return <div className={styles.editorArea} style={{ backgroundImage }} />
    }
}

export default EditorScene
