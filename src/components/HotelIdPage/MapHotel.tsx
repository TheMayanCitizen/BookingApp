import { Map, Marker } from "pigeon-maps"
interface Props{
    lat : number;
    lon : number;
}

export const MapHotel = ({lat, lon}:Props) => {

  return (
    <Map center={[lat, lon]} width={( 500 * 100)/100} height={450} >
        <Marker width={50} anchor={[lat, lon]} color="gray"/>
    </Map>
  )
}