import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { carouselData } from '../assets/Carousel'
import { HiArrowCircleRight, HiArrowCircleLeft } from 'react-icons/hi'
function Projects() {

  AOS.init({
    offset: 700,
    duration: 500,
    easing: 'linear',
    once: true,
  })

  const [currentSlide, setCurrentSlide] = React.useState(0)
  const slideLength = carouselData.length - 1
  const previousSlide = () => {
    currentSlide ? setCurrentSlide(currentSlide - 1) : setCurrentSlide(3)
  }
  const nextSlide = () => {
    currentSlide !== slideLength ? setCurrentSlide(currentSlide + 1) : setCurrentSlide(0)
  }
  const moveSlide = (e) => {
    setCurrentSlide(parseInt(e.target.value))
  }


  return (
    <section className="container projects">
      <div data-aos="zoom-in-right">
        <h1 className="display-1" id="projects">My Projects</h1>
        <div className="slideShow">
          <div className="d-flex flex-row justify-content-center align-items-center ">
            <h3 className="display-3 me-3">{carouselData[currentSlide].name}</h3>
            <a className="ms-3 readme-icon" href={carouselData[currentSlide].readMeUrl} target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
              </svg>
            </a>
          </div>
          {carouselData.map((slide, index) => {
            return (
              <div className={index === currentSlide ? 'slide-active' : 'slide'} key={slide.name}>
                {index === currentSlide && <a href={slide.url} target="_blank" rel="noreferrer"><img className="slider-image" src={slide.imageUrl}></img></a>}
              </div>
            )
          })}
          <div className="flex-center-col project-info">
            <p className="mt-4 project-text">
              {carouselData[currentSlide].info}
            </p>
          </div>
          <div className="change-slide">
            <HiArrowCircleLeft className="left-arrow" onClick={previousSlide} />
            <input className="input" type="radio" name="slide" value="0" checked={!currentSlide} onClick={moveSlide}></input>
            <input type="radio" name="slide" value="1" checked={currentSlide === 1} onClick={moveSlide}></input>
            <input type="radio" name="slide" value="2" checked={currentSlide === 2} onClick={moveSlide}></input>
            <input type="radio" name="slide" value="3" checked={currentSlide === 3} onClick={moveSlide}></input>
            <HiArrowCircleRight className="right-arrow" onClick={nextSlide} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects