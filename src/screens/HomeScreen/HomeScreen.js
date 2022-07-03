import React from 'react';
import HeadingComp from '../../components/HomeScreen/HeadingComp/HeadingComp';
import WhiteDisplayComp from '../../components/HomeScreen/WhiteDisplayComp/WhiteDisplayComp';

import styles from './HomeScreen.module.css';

const HomeScreen = (props) => {

    return (<div className={styles.homeScreenContainer}>
        <HeadingComp></HeadingComp>
        <WhiteDisplayComp></WhiteDisplayComp>
    </div>)
}

export default HomeScreen;