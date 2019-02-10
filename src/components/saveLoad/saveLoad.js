import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styles from './saveLoad.css'
import { Button } from '../ui'
import { uploadProjectFromLS } from "../../redux/actions/projectAction";

function mapStateToProps(state) {
    return {
        ...state,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ uploadProjectFromLS }, dispatch)
}

@connect(mapStateToProps, mapDispatchToProps)
class SaveLoad extends Component {
    render() {
        return (
            <div className={styles.appActions}>
                <Button
                    type={'action'}
                    onClickCallback={() => {
                        localStorage.setItem('project', JSON.stringify(window.store.getState().project))
                    }}
                >
                    Save
                </Button>{' '}
                <Button
                    onClickCallback={() => {
                        const LSProject = localStorage.getItem('project')
                        this.props.uploadProjectFromLS(JSON.parse(LSProject))
                    }}
                >
                    Load
                </Button>
            </div>
        )
    }
}

export default SaveLoad
