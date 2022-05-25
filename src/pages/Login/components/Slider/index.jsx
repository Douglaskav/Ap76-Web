import { useState, useRef } from "react";
import { OnboardingSlideContent } from "../../../../content/onboardingSlide";

import "./styles.css";

export function Slider() {
  let currentSlide = useRef(0);
  let timeout = useRef(); 

  function activeSlide(index) {
    currentSlide.current = index;
    autoSlide();
  }

  function autoSlide() {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(next, 5000);
  }

  function next() {
    if (currentSlide.current < OnboardingSlideContent.length - 1) {
      activeSlide(currentSlide + 1);
    } else {
      activeSlide(0);
    }
  }

  activeSlide(0);

  return (
    <div className="w-[100%] h-[100vh] bg-[#EAF7EF]">
      <div data-slide="slide" className="slide">
        <div className="slide-items">
          {OnboardingSlideContent.map((slide, index) => (
            <div
              key={slide.id}
              className={
                currentSlide.current === index
                  ? "active text-center flex flex-col justify-center items-center p-8"
                  : ""
              }
              onClick={next}
            >
              <img
                src={slide.image}
                alt="an ilustraded woman"
                className="w-[550px]"
              />
              <h2 className="text-3xl w-96 text-[#111] font-bold max-w-64">
                {slide.title}
              </h2>
              <p className="text-sm w-96 mt-4">{slide.description}</p>
            </div>
          ))}
        </div>
        <nav className="slide-nav">
          <div className="slide-thumb">
            {OnboardingSlideContent.map((el, index) => (
              <span key={index} className={currentSlide.current === index ? "active" : ""}></span>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
