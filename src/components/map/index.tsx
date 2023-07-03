import React from "react";
import GoogleMapReact from "google-map-react";
import S from "./map-styled";

const Map = () => {
  //constants
  const coordinates = { lat: 0, lng: 0 };
  const mapKey = process.env.REACT_APP_GOOGLE_MAP_API;

  return (
    <S.MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: mapKey }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={() => {}}
        onChildClick={() => {}}
      ></GoogleMapReact>
    </S.MapContainer>
  );
};

export default Map;
