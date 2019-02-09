import React, { Component } from 'react'
import classNames from 'classnames'

import styles from './backgroundSelector.css'
import { Button } from '../ui'

class BackgroundSelectorView extends Component {
    _clickImg = index => {
        this.props.action(index)
    }
    render() {
        const {
            title,
            data: { source, active },
        } = this.props
        return (
            <div className={styles.backgroundSelector}>
                <h2>{title}</h2>
                <ul className={styles.backgroundSelectorList}>
                    {source.map((element, i) => {
                        const itemActive = classNames({
                            [styles.activeItem]: i === active,
                        })
                        const imgThumbSrc = `https://images.unsplash.com/photo-${element}?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=100&h=60&fit=crop`
                        return (
                            <li
                                key={element}
                                onClick={() => {
                                    this._clickImg(i)
                                }}
                            >
                                <img
                                    className={itemActive}
                                    src={imgThumbSrc}
                                    alt={element}
                                />
                            </li>
                        )
                    })}
                </ul>
                <Button
                    onClickCallback={() => {
                        this._clickImg(-1)
                    }}
                >
                    Delete Background
                </Button>
            </div>
        )
    }
}

export default BackgroundSelectorView
