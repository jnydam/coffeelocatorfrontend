import React, {useEffect} from 'react';

import './CoffeeEntryHorizComp.css';

import styles from './CoffeeEntryHorizComp.module.css';

import tt, { map } from '@tomtom-international/web-sdk-maps';

// Individual Component

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

            const marker = new tt.Marker()
                .setLngLat(props.latLong)
                .addTo(mapObject);
        });





    }, []);

    return (<div className={styles.coffeeEntryHorizCompContainer}>
        <div className={styles.infoDivisionContainer}>
            <span className={styles.textStyleBold}>{`${props.indexCount} - ${props.name}`}</span>
            <span className={styles.textStyle} style={{marginTop: '0.5rem'}}>{props.address}</span>
        </div>
        <div className={styles.mapViewContainer}>
            <div id={`map-box-${props.indexCount}`} className="map-container">

            </div>
        </div>
    </div>)
}

export default CoffeeEntryHorizComp;