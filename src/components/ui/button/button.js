import React from 'react'
import classNames from 'classnames'

import styles from './button.css'

const Button = ({ children, block, type, onClickCallback }) => {
    const btnClass = classNames(styles.button, {
        [styles.block]: block,
        [styles.actionBtn]: type === 'action',
    })
    return (
        <div
            onClick={() => {
                onClickCallback()
            }}
            className={btnClass}
        >
            {children}
        </div>
    )
}

export default Button
