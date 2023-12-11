// import React, { useState } from 'react'
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"

// import "./Carousel.scss"

// function Carousel({ data }) {
//     const [slide, setSlide] = useState(0)

//     const nextSlide = () => {
//         setSlide(slide === data.length - 1 ? 0 : slide + 1)
//     }

//     const prevSlide = () => {
//         setSlide(slide === 0 ? data.length - 1 : slide - 1)
//     }

//     return (
//         <div className='carousel'>
//             <BsArrowLeftCircleFill className='arrow arrowLeft' onClick={prevSlide} />
//             {data.map((item, idx) => {
//                 return <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slideHidden"} />
//             })}
//             <BsArrowRightCircleFill className='arrow arrowRight' onClick={nextSlide} />
//             <span className='indicators'>
//                 {data.map((_, idx) => {
//                     return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "indicator" : "indicator indicatorInactive"}></button>
//                 })}
//             </span>
//         </div>
//     )
// }

// export default Carousel




import React, { useState, useEffect, useCallback } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Carousel.scss";

function Carousel({ data }) {
    const [slide, setSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setSlide(slide => (slide === data.length - 1 ? 0 : slide + 1));
    }, [data.length]);

    const prevSlide = useCallback(() => {
        setSlide(slide => (slide === 0 ? data.length - 1 : slide - 1));
    }, [data.length]);

    // Effet secondaire pour gérer l'autoplay
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); 

        return () => {
            clearInterval(interval); // Nettoie l'intervalle lorsque le composant est démonté
        };
    }, [nextSlide]);

    return (
        <div className='carousel'>
            <BsArrowLeftCircleFill className='arrow arrowLeft' onClick={prevSlide} />
            {data.map((item, idx) => {
                return <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slideHidden"} />;
            })}
            <BsArrowRightCircleFill className='arrow arrowRight' onClick={nextSlide} />
            <span className='indicators'>
                {data.map((_, idx) => {
                    return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "indicator" : "indicator indicatorInactive"}></button>;
                })}
            </span>
        </div>
    );
}

export default Carousel;
