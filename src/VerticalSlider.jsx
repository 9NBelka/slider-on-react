import React, { useState } from 'react';
import './VerticalSlider.css';

const slides = [
  {
    id: 1,
    title: 'Слайд 1',
    description: 'Описание 1',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 2,
    title: 'Слайд 2',
    description: 'Описание 2',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 3,
    title: 'Слайд 3',
    description: 'Описание 3',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 4,
    title: 'Слайд 4',
    description: 'Описание 4',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 5,
    title: 'Слайд 5',
    description: 'Описание 5',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 6,
    title: 'Слайд 6',
    description: 'Описание 6',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 7,
    title: 'Слайд 7',
    description: 'Описание 7',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 8,
    title: 'Слайд 8',
    description: 'Описание 8',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 9,
    title: 'Слайд 9',
    description: 'Описание 9',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 10,
    title: 'Слайд 10',
    description: 'Описание 10',
    image: 'https://via.placeholder.com/300x200',
  },
];

const VerticalSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Центральный слайд

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const handleClickSlide = (index) => {
    const prevIndex = (activeIndex - 1 + slides.length) % slides.length;
    const nextIndex = (activeIndex + 1) % slides.length;
    const beforePrevIndex = (prevIndex - 1 + slides.length) % slides.length;
    const afterNextIndex = (nextIndex + 1) % slides.length;

    if (index === prevIndex) {
      handlePrev(); // Клик по верхнему слайду
    } else if (index === nextIndex) {
      handleNext(); // Клик по нижнему слайду
    } else if (index === beforePrevIndex) {
      setActiveIndex(beforePrevIndex); // Клик по "before-prev"
    } else if (index === afterNextIndex) {
      setActiveIndex(afterNextIndex); // Клик по "after-next"
    }
  };

  const getSlideClass = (index) => {
    const prevIndex = (activeIndex - 1 + slides.length) % slides.length;
    const nextIndex = (activeIndex + 1) % slides.length;
    const beforePrevIndex = (prevIndex - 1 + slides.length) % slides.length;
    const afterNextIndex = (nextIndex + 1) % slides.length;

    if (index === activeIndex) return 'active'; // Центральный слайд
    if (index === prevIndex) return 'prev'; // Верхний слайд
    if (index === nextIndex) return 'next'; // Нижний слайд
    if (index === beforePrevIndex) return 'before-prev'; // За пределами видимости сверху
    if (index === afterNextIndex) return 'after-next'; // За пределами видимости снизу
    return 'hidden'; // Остальные скрыты
  };

  return (
    <div className='slider-container'>
      <div className='slider'>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${getSlideClass(index)}`}
            onClick={() => handleClickSlide(index)}>
            <img src={slide.image} alt={slide.title} />
            <div className='slide-content'>
              <h2>{slide.title}</h2>
              {index === activeIndex && <p>{slide.description}</p>}
            </div>
          </div>
        ))}
      </div>
      {/* <div className='controls'>
        <button className='prev-btn' onClick={handlePrev}>
          ▲
        </button>
        <button className='next-btn' onClick={handleNext}>
          ▼
        </button>
      </div> */}
    </div>
  );
};

export default VerticalSlider;
