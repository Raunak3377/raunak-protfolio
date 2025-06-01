import React, { useState, useEffect } from 'react';
import './Graphics.css';

const Graphics = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image: './images/pamph1.jpg',
      title: 'Design Project 1',
      description: 'Description of your first design project'
    },
    {
      id: 2,
      image: './images/pic 1.jpg',
      title: 'Design Project 2',
      description: 'Description of your second design project'
    },
    {
      id: 3,
      image: './images/pre.jpg',
      title: 'Design Project 3',
      description: 'Description of your third design project'
    },
    {
        id: 4,
        image: './images/img1.png',
    
    },
    {
        id: 5,
        image: './images/pic2.jpg',
    },
    {
        id: 6,
        image: './images/pic3.jpg',
    },
    {
        id: 7,
        image: './images/pic4.jpg',
    },
    {
        id: 8,
        image: './images/pic5.jpg',
    },
    {
        id: 9,
        image: './images/pic6.jpg',
    },
    {
        id: 10,
        image: './images/pic7.jpg',
    },
    {
        id: 11,
        image: './images/pic8.jpg',
    },
    {
        id: 12,
        image: './images/pic9.jpg',
    },
    {
        id: 13,
        image: './images/pic10.jpg',
    }    
    
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="graphics-section" id='graphicdesign'>
      <h2 className="section-title">Graphic Designs</h2>
      <div className="slider-container">
        <div 
          className="slider"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="slide">
              <div className="slide-content">
                <div className="image-container">
                  <img src={slide.image} alt={slide.title} />
                </div>
               
              </div>
            </div>
          ))}
        </div>

        <button 
          className="slider-button prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ←
        </button>
        <button 
          className="slider-button next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          →
        </button>

        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button 
          className="autoplay-toggle"
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isAutoPlaying ? '⏸' : '▶'}
        </button>
      </div>
    </section>
  );
};

export default Graphics; 