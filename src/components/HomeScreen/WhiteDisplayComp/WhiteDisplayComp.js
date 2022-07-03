import React from 'react';
import CoffeeEntryHorizComp from './CoffeeEntryListContainer/CoffeeEntryHorizComp/CoffeeEntryHorizComp';
import CoffeeEntryListContainer from './CoffeeEntryListContainer/CoffeeEntryListContainer';
import StateHeadingComp from './StateHeadingComp/StateHeadingComp';

import styles from './WhiteDisplayComp.module.css';

const WhiteDisplayComp = (props) => {

    return (<div className={styles.whiteDisplayCompContainer}>
        <StateHeadingComp></StateHeadingComp>
        <CoffeeEntryListContainer></CoffeeEntryListContainer>
    </div>)
}

export default WhiteDisplayComp;