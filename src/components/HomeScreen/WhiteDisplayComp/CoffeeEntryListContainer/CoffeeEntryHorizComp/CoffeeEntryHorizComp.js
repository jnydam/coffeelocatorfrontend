import React, {useEffect} from 'react';

import './CoffeeEntryHorizComp.css';

import styles from './CoffeeEntryHorizComp.module.css';

import tt from '@tomtom-international/web-sdk-maps';

const CoffeeEntryHorizComp = (props) => {


    useEffect(() => {

        const mapObject = tt.map({
            key: process.env.REACT_APP_TOM_TOM_API_KEY,
            container: `map-box-${props.indexCount}`,
            center: props.latLong,
            dragPan: false,
            interactive: false,
            zoom: 3
        });


        mapObject.on('load', () => {

            mapObject.setZoom(13);
        })



    }, []);

    return (<div className={styles.coffeeEntryHorizCompContainer}>
        <div className={styles.infoDivisionContainer}>
            <span>{`${props.indexCount}- Hello`}</span>
            <span>Some  more address information</span>
        </div>
        <div className={styles.mapViewContainer}>
            <div id={`map-box-${props.indexCount}`} className="map-container">

            </div>
        </div>
    </div>)
}

export default CoffeeEntryHorizComp;