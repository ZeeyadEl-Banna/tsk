import * as React from "react";

const CustomLeftArrow = ({ onClick }) => (
  <i onClick={() => onClick()} className="custom-left-arrow" />
);
const CustomRightArrow = ({ onClick }) => {
  return <i className="custom-right-arrow" onClick={() => onClick()} />;
};

const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }) => {
  const { totalItems, currentSlide } = carouselState;
  return (
    <div className="custom-button-group">
      <div>Current slide is {currentSlide}</div>
      <button onClick={() => previous()}>Previous slide</button>
      <button onClick={() => next()}>Next slide</button>
      <button
        onClick={() => goToSlide(Math.floor(Math.random() * totalItems + 1))}
      >
        Go to a random slide
      </button>
    </div>
  );
};
const CustomButtonGroupAsArrows = ({ next, previous }) => {
  return (
    <div
      style={{
        textAlign: "center",
        // marginBottom:'20%',
        position:'relative',
        top: "-230px"
      }}
    >
      <button onClick={previous}  style={{background:'white', border:'0', marginRight:'78.5%'}} ><i  style={{color:'Orange' , fontSize:"xxx-large"}}  className="fas fa-angle-left"></i></button>
      <button  onClick={next} style={{background:'white', border:'0'}}><i  style={{color:'Orange' , fontSize:"xxx-large"}}  className="fas fa-angle-right"></i></button>
    </div>
  );
};

export {
  CustomLeftArrow,
  CustomRightArrow,
  CustomButtonGroup,
  CustomButtonGroupAsArrows,
};