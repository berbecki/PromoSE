import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setSelectedBackgroundIndex } from '../../redux/actions/backgroundSelectorActions'

import BackgroundSelectorView from './backgroundSelector.view'

function mapStateToProps(state) {
    return {
        ...state,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setSelectedBackgroundIndex }, dispatch)
}

@connect(
    mapStateToProps,
    mapDispatchToProps,
)
class BackgroundSelector extends Component {
    render() {
        const { background_image: imageData } = this.props.project
        return <BackgroundSelectorView action={this.props.setSelectedBackgroundIndex} title="Select Background" data={imageData} />
    }
}

export default BackgroundSelector
