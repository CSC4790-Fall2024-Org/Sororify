import { useState, useEffect } from "react";
import "./Carousel.css";

const CarouselIndicators = ({ images, activeIndex, onClick }) => {
  return (
    <div className="carousel__indicators">
      {images.map((_, index) => (
        <span
          key={index}
          className={`carousel__indicator ${
            index === activeIndex ? 'active' : ''
          }`}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};

const Carousel = ({ images, interval = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, interval);
    return () => clearInterval(slideInterval); // Clear interval on component unmount
  }, [activeIndex, interval]);

  return (
    <div className="carousel">
      <button className="carousel__btn carousel__btn--prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="carousel__inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div className="carousel__item" key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="carousel__btn carousel__btn--next" onClick={nextSlide}>
        &#10095;
      </button>
      <CarouselIndicators
        images={images}
        activeIndex={activeIndex}
        onClick={setActiveIndex}
      />
    </div>
  );
};

export default Carousel;