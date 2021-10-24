/** @format */
import {
  MapContainer,
  TileLayer,

  Polygon,
  
} from "react-leaflet";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
 
  CustomButtonGroupAsArrows,
} from "./Custom";
import LocationMarker from "./LocationMarker";
const Causral = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 920 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 920, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const purpleOptions = { color: "purple" };
  let bola = false;
  let postion = [];

  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all 1"
      transitionDuration={1000}
      containerClass="react-multi-carousel-list zeyad"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={props.deviceType}
      itemClass="card-group"
      sliderClass=""
      arrows={false}
      renderButtonGroupOutside={true}
      customButtonGroup={<CustomButtonGroupAsArrows />}
      centerMode={false}>
      {props.json.map((map) => {
        if (props.json.length > 0) {
          bola = true;
          postion = map.features;
          console.log([bola, postion]);
        }
        return map.features.map((cor) => {
          console.log(cor);
          return (
            <div className="card" style={{marginLeft:'5px'}}>
              <div className="card-img-top">
                <MapContainer
                  map={cor.geometry.coordinatesPoint}
                  key={cor.properties.name}
                  center={{
                    lat: cor.geometry.coordinatesPoint[1],
                    lng: cor.geometry.coordinatesPoint[0],
                  }}
                  zoom={11}
                  scrollWheelZoom={false}
                  dragging={false}>
                  {/* <GeoJSON data={map.features}/> */}
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <LocationMarker map={cor.geometry.coordinatesPoint} />
                  {
                    <Polygon
                      pathOptions={purpleOptions}
                      positions={cor.geometry.coordinatesPolygon}
                    />
                  }
                </MapContainer>
              </div>
              <div className="card-body">
                <div style={{position:'relative', top:'-5px', margin:'0px'}}>
                <h6 className="card-title"  style={{ overflow:'hidden', whiteSpace: 'nowrap' ,margin:'0px' }}>{cor.properties.name} </h6>
                <p className="card-text" style={{color:'orange' , fontWeight:"bold"}}>
                {cor.properties.level.charAt(0).toUpperCase() + cor.properties.level.slice(1)}
                </p>
                <div >
                  {cor.properties.type.charAt(0).toUpperCase() +cor.properties.type.slice(1) } | {cor.properties.language}
                </div>
                </div>
              </div>
              <div className="card-footer">
                  <small className="text-muted">Toronto - North York</small>
                </div>  
            </div>
          );
        });
      })}
    </Carousel>
  );
};
export default Causral;
