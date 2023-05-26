import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function Hero() {
  return (
    <div className="hero" id="Home">
    <MDBCarousel showIndicators showControls fade className="carouselSlider">
      <MDBCarouselItem
        className="w-100 d-block carouselItem"
        itemId={1}
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
        alt="..."
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block carouselItem"
        itemId={2}
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
        alt="..."
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem 
        className="w-100 d-block carouselItem"
        itemId={3}
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
        alt="..."
      >
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </MDBCarouselItem>
    </MDBCarousel>
    </div>
  );
}