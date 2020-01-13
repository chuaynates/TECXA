 import React from 'react';
 import{ GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";

 //-12.044099, -76.952904
 const Map = (props)=>{
     return(
         <GoogleMap defaultZoom={16}
        defaultCenter={{lat:-12.044099, lng:-76.952904 }}/>

     );
 };

 export default withScriptjs(
     withGoogleMap(
        Map
     )
)