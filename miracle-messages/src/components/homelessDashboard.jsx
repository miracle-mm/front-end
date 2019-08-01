import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { getIP } from "./services/ipLocation.js";
import axios from "axios";
import SignupHomeless from "./signupHomeless.jsx";


const AnyReactComponent = ({ text }) => (
  <div>
    <div
      style={{
        color: "red",
        border: "2px solid red",
        borderRadius: "15px",
        width: "30px",
        height: "30px",
        backgroundColor: "red",
        textAlign: "center"

      }}
    />
    <div style={{
        position:"absolute",
        padddingLeft:"10px",
        fontSize:"20px",
    }}>{text}</div>
  </div>
);

class HomelessDashboard extends Component {
  constructor() {
    super();
    this.state = {
      center: {
        lat: null,
        lng: null
      },
      partners: [],
      zoom: 14
    };
  }
  componentDidMount() {
    getIP()
      .then(response => {
        const center = { ...this.state.center };
        const { latitude, longitude } = response.data;
        center.lat = latitude;
        center.lng = longitude;
        this.setState({ center });
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("https://miracle-messages-map.herokuapp.com/api/partners")
      .then(response => {
        console.log(response);
        this.setState({ partners: response.data });
      });
  }
  render() {
    if (!this.state.center.lat) {
      return <h1>Loading...</h1>;
    }

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          {this.state.partners.map(partner => {
            return (
              <AnyReactComponent
                key={partner.id}
                lat={partner.latitude}
                lng={partner.longitude}
                text={!partner.name ? partner.email : partner.name}
              />
            );
          })}
        </GoogleMapReact>
        <SignupHomeless />
      </div>
    );
  }
}

export default HomelessDashboard;
