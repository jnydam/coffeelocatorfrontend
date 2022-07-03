import React from 'react';

import styles from './StateHeadingComp.module.css';


const StateHeadingComp = (props) => {

    return (<div className={styles.stateHeadingCompContainer}>
        <span className={styles.stateSelectorText}>Select a state:</span>
        <button className={styles.stateSelectorButton}>
            <span>Massachusetts</span>
        </button>
    </div>)
}

export default StateHeadingComp;