
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const BangladeshMap = () => {
  const mapStyle = {
    height: "500px",
    width: "100%",
  };

  return (
    <MapContainer center={[23.6850, 90.3563]} zoom={7} style={mapStyle}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default BangladeshMap;
