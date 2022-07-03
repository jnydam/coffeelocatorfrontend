import React from 'react';

import styles from './CoffeeEntryListContainer.module.css';

import CoffeeEntryHorizComp from './CoffeeEntryHorizComp/CoffeeEntryHorizComp';

const CoffeeEntryListContainer = (props) => {

    const dummyCoffeeData = [
        {
            name: "Pavement Coffeehouse",
            address: "736 Commonwealth Ave, Boston, MA",
            latLong: [-71.107480, 42.349620]
        },
        {
            name: "Blue Bottle Coffee",
            address: "88 Ames Street Suite R120, Cambridge, MA 02142",
            latLong: [-71.087580, 42.363290]
        },
        {
            name: "Coffee Central",
            address: "55 Fruit Street, Boston, MA 02114",
            latLong: [-71.068626, 42.362869]
        }
    ];



    return (<div className={styles.coffeeEntryListContainerComp}>

        {dummyCoffeeData.map((coffeeDataEntry, index) => (
            <CoffeeEntryHorizComp
                key={index}
                indexCount={index}
                name={coffeeDataEntry.name}
                address={coffeeDataEntry.address}
                latLong={coffeeDataEntry.latLong}
                coffeeData={dummyCoffeeData}></CoffeeEntryHorizComp>
        ))}
    </div>)
}

export default CoffeeEntryListContainer;