import React, {useEffect} from 'react';

import './CoffeeEntryHorizComp.css';

import styles from './CoffeeEntryHorizComp.module.css';

import tt from '@tomtom-international/web-sdk-maps';

const CoffeeEntryHorizComp = (props) => {


    useEffect(() => {

        const mapObject = tt.map({
            key: process.env.REACT_APP_TOM_TOM_API_KEY,
            container: 'map-container',
            center: [-87.116315, 32.835597],
            dragPan: false,
            interactive: false,
            zoom: 3
        });


        mapObject.on('load', () => {

            mapObject.setZoom(9);
        })



    }, []);

    return (<div className={styles.coffeeEntryHorizCompContainer}>
        <div className={styles.infoDivisionContainer}>
            <span>wefwef</span>
            <span>Some  more address information</span>
        </div>
        <div className={styles.mapViewContainer}>
            <div id="map-container">

            </div>
        </div>
    </div>)
}

export default CoffeeEntryHorizComp;