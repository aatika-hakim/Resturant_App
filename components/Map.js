import { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import styles from "../styles/Map.module.css";

class MapContainer extends Component {
  render() {
    return (
      <div className={styles.map}>
        <Map
          google={this.props.google}
          style={{ width: "600px", height: "500px" }}
          zoom={8}
          initialCenter={{
            lat: 31.507668374715742,
            lng: 74.34834426834023,
          }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC6m6_NN5WVJpwEPbatV1l9FkxnPWcra9Y",
})(MapContainer);
