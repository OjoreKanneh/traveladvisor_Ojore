// import React from 'react';
// import googleMapReact from 'google-map-react';
// import { Paper, Typography, useMediaQuery} from '@material-ui/core';
// import LocationOnOutlined from '@material-ui/icons/LocationOnOutlined';
// import Rating from '@material-ui/lab';

// import { useRef, useEffect } from "react";
// import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";

// import useStyles from './styles'

// const Map = () => {
//   const classes=useStyles();
//   const isMobile=useMediaQuery('(min-width:600px)');
//   const coordinates={lat:0, lng:0};

//   return (
//     <div className={classes.mapContainer}>
//       <mapboxgl
//         bootstrapURLKeys={{key: 'pk.eyJ1Ijoib2pvcmUiLCJhIjoiY2xrdmFhbXVoMHBxaTNlbmRuaWx1NjUzdCJ9.cZcHitiinYPI5-V26t2tlg'}}
//         defaulCenter={coordinates}
//         center={coordinates}
//         defaultZoom={14}
//         margin={[50,50,50,50]}
//         options={''}
//         onChange={''}
//         oncChildClick={''}
        
//         >
//       </mapboxgl>

//     </div>
//   );
// }

// export default Map



import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import useStyles from './styles'

// Replace 'YOUR_MAPBOX_ACCESS_TOKEN' with your actual Mapbox access token
mapboxgl.accessToken = "pk.eyJ1Ijoib2pvcmUiLCJhIjoiY2xrdmFhbXVoMHBxaTNlbmRuaWx1NjUzdCJ9.cZcHitiinYPI5-V26t2tlg";

const Map = () => {
  const mapContainerRef = useRef(null);
  const classes=useStyles();
  // const coordinates={lat:10.536421, lng:-61.311951};
  const [coordinates, setCoordinates] = useState([-61.311951, 10.536421]);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11", // replace with your desired map style
      // center: [-61.311951, 10.536421], // [lng, lat]
      center: coordinates,
      zoom: 9,
    });

    // Add an onClick event handler to the map
    map.on("click", (e) => {
      // Get the clicked coordinates and update the state
      setCoordinates([e.lngLat.lng, e.lngLat.lat]);
    });

    return () => map.remove();
  }, [coordinates]); // Include coordinates in the dependency array to update the map when the coordinates change

  return(
    <div className={classes.mapContainer} ref={mapContainerRef} style={{ width:"957px", height: "700px" }} >
      
        {/* ref={mapContainerRef}
        defaulCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={''}
        onChange={''}
        oncChildClick={''}

 */}

        </div>

  )
};

export default Map;
