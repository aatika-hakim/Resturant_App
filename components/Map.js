import { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import styles from "../styles/Map.module.css";
import Text from "./Text";

class MapContainer extends Component {
  render() {
    return (
      <div className={styles.section4}>
        <div className={styles.map}>
          <Map
            google={this.props.google}
            style={{ width: "50%", height: "500px" }}
            zoom={10}
            initialCenter={{
              lat: 31.54022970706976,
              lng: 74.30367065702184,
            }}
          />
        </div>
        <div className={styles.Img}>
          <Text className={styles.map_text}>Gajju_Matta Lahore, Pakistan.</Text>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBa0h0RnxiJbTpaxeWpHFdOegT4ubqCiF4",
})(MapContainer);
