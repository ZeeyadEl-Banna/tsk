import {  Marker } from 'react-leaflet'
import L from 'leaflet';
import school from "../Static/Icon/school-pin.svg";


function LocationMarker(props) {

  const iconPerson =  new L.Icon(  {
    iconUrl: school,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [25,25],
   
});




  
   return  (
      <Marker position={[props.map[1],props.map[0]]} icon={iconPerson}>
      </Marker>
   )
  
   }
  export default LocationMarker