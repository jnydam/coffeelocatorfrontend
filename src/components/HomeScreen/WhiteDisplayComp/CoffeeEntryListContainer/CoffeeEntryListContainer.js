import React from 'react';

import styles from './CoffeeEntryListContainer.module.css';

import CoffeeEntryHorizComp from './CoffeeEntryHorizComp/CoffeeEntryHorizComp';

const CoffeeEntryListContainer = (props) => {


    return (<div className={styles.coffeeEntryListContainerComp}>
        <CoffeeEntryHorizComp></CoffeeEntryHorizComp>
    </div>)
}

export default CoffeeEntryListContainer;