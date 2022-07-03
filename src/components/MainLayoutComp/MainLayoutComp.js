import React from 'react';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';

import styles from './MainLayoutComp.module.css';

const MainLayoutComp = (props) => {


    return (<div className={styles.mainLayoutCompContainer}>
        <HomeScreen></HomeScreen>
    </div>)
}

export default MainLayoutComp;