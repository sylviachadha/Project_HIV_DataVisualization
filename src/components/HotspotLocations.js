import React from 'react';
import {CheckboxSVGMap} from 'react-svg-map';
import BangkokSVG from './maps';
import "react-svg-map/lib/index.css";


function HotspotLocations() {

    const [data, setData] = React.useState({
        pointedLocation: null,
        focusedLocation: null,
        selectedLocations: []
    });


    const handleLocationMouseOver = (e) => {
        const thaiLocation = getLocationName(e);
        const englishLocation = getLocationId(e);
        setData(prevState => ({
            ...prevState,
            pointedLocation: thaiLocation + "/" + englishLocation
        }));
    };

    const handleLocationFocus = (e) => {
        const thaiLocation = getLocationName(e);
        const englishLocation = getLocationId(e);
        setData(prevState => ({
            ...prevState,
            focusedLocation: thaiLocation + "/" + englishLocation
        }));
    };


    return (
        <div>
            <br/>
            <h1>Bangkok SVG Map</h1>
            <br/>

            <h3>
                Pointed location: {data.pointedLocation}
            </h3>
            <br/>
            <h3>
                Clicked location (EN): {data.focusedLocation}
            </h3>
            <CheckboxSVGMap
                map={BangkokSVG}
                onLocationMouseOver={handleLocationMouseOver}
                onLocationFocus={handleLocationFocus}

            />


        </div>
    );
}

function getLocationName(event) {
    return event.target.attributes.name.value;
}

export function getLocationId(event) {
    return event.target.id;
}

export default HotspotLocations;