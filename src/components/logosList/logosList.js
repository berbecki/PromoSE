import React from 'react'
import LogoItem from './logoItem'

import styles from './logosList.css'

const LOGOS = ['/images/logo_one.png', '/images/logo_two.png', '/images/logo_three.png']

export default () => {
    return (
        <ul className={styles.logoList}>
            {LOGOS.map((elem, i) => (
                <LogoItem key={elem} src={elem} index={i} />
            ))}
        </ul>
    )
}
