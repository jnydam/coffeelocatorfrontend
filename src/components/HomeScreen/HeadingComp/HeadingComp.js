import React from 'react';

import styles from './HeadingComp.module.css';

const HeadingComp = (props) => {

    return (<div className={styles.headingCompContainer}>
        <span className={styles.coffeeLocatorHeading}>Coffee Locator</span>
    </div>)
}

export default HeadingComp;