import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const PlaceCard = ({ place }) => {
  const { image, title, subtitle, rating } = place;

  return (
    <div className="place-card">
      <Image src={image} alt={title} />
      <div className="place-details">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <div className="rating">
          {[...Array(rating)].map((_, i) => (
            <i key={i} className="fas fa-star"></i>
          ))}
        </div>
      </div>
    </div>
  );
};

const PlacesCarousel = ({ places }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="places-carousel">
      <Carousel responsive={responsive}>
        {places.map((place, index) => (
          <div key={index}>
            <PlaceCard place={place} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PlacesCarousel;
