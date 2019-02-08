import React from 'react'
import classNames from 'classnames'

import styles from './button.css'

const Button = ({ children, block, type }) => {
    const btnClass = classNames(styles.button, {
        [styles.block]: block,
        [styles.actionBtn]: type === 'action'
    })
    return <div className={btnClass}>{children}</div>
}

export default Button
