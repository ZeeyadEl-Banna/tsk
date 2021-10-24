/** @format */

import "./App.css";
// import 'bootstrap/dist/bootstrap.min.css';
import Causral from "./Components/Causral";
import diamonds from "./icons/diamond.svg";
import burger from "./icons/hamburger.svg";
import school from "./icons/school-pin.svg";
import puzzle from "./icons/puzzle.svg";
import { MapContainer, TileLayer, Marker, Popup, Map } from "react-leaflet";
import LocationMarker from "./Components/LocationMarker";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";

function App() {
  const [JSON, setJSON] = useState([]);

  useEffect(() => {
    let isMounted = true;  
    fetch("https://www.scholarhood.ca/dev-test.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        
        const convertGeoJson = (data) => {
          var geoJson = {
            type: "FeatureCollection",
            features: [],
          };
          for (var i = 0; i < data.length; i++) {
            geoJson.features.push({
              type: "Feature",
              geometry: {
                type: "Polygon",
                coordinatesPoint: [data[i].longitude, data[i].latitude],
                coordinatesPolygon: data[i].boundaries.secondary
              },
              properties: {
                name: data[i].name,
                street: data[i].street,
                level: data[i].level[0],
                type: data[i].type,
                language: data[i].language,
                
              },
            });
          }
          return [geoJson];
        };
        const GeoJson = convertGeoJson(data);
        if (isMounted) setJSON(GeoJson); 
      });
      return () => { isMounted = false };
  }, []);

  return (
    <div className="container flex-column ">
      <div className="text-center d-flex flex-column align-items-center px-2  mx-2 ">
        <h1 className="display-6 text-center mb-3" style={{ marginTop: "8%" }}>
          <strong>Bacon Ipsum</strong>
        </h1>
        <p
          className="lead text-center   "
          style={{ marginLeft: "8%", marginRight: "8%" }}>
          <strong>
            Consectetur in ground round landjaeger. Tempor ut sausage spare ribs
            cupim brisket biltong cupim jerky meatloaf in lorem.
          </strong>
        </p>
      </div>
      <div className=" justify-content-center d-flex">
        <div
          className="container px-4 py-5  justify-content-center d-flex"
          id="featured-3">
          <div className="row g-4 py-5 row-cols-1  row-cols-lg-3 text-center justify-content-around  ">
            <div className="feature col  col-md-4">
              <div className="feature-icon mb-3 ">
                <img src={burger} alt="buger" />
              </div>
              <p style={{ fontSize: "large", color: "#05CBE7" }}>Hamburger</p>
              <p className="border-top pt-3">
                Spicy jalapeno bacon ipsum dolor amet dolore jowl tempor
                consequat flank ribeye. Voluptate tri-tip ex exercitation nisi
                rump ball tip short ribs labore ipsum
              </p>
            </div>

            <div className="feature col  col-md-4">
              <div className="feature-icon mb-3">
                <img src={diamonds} alt="diamons" />
              </div>
              <p style={{ fontSize: "large", color: "#05CBE7" }}>Diamonds</p>
              <p className="border-top pt-3">
                Id ex pariatur sausage eu boudin nulla, tempor lorem do jowl
                swine. Excepteur corned beef proident kevin sirloin do. In non
                tri-tip ham shankle bone picanhavelit.
              </p>
            </div>

            <div className="feature col col-md-4 ">
              <div className="feature-icon mb-3">
                <img src={puzzle} alt="puzzle" />
              </div>
              <p style={{ fontSize: "large", color: "#05CBE7" }}>
                Extreme Puzzling
              </p>
              <p className="border-top pt-3">
                Bacon tail ribeye esse shank short ribs, rump ut elit. Beef
                filet mignon tongue brisket. Do short ribs magna culpa
                frankfurter fugiat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Causral json={JSON} />
      </div>
    </div>
  );
}

export default App;
