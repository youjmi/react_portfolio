import React, {useState} from 'react'
import {ResContent} from "./ResContent"
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from "react-icons/fa"

const Slider = ({ slides }) => {
    const [current , setCurrtent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrtent(current === length -1 ? 0 : current +1)
    }

    const prevSlide = () => {
        setCurrtent(current === 0 ? length-1:current -1 )
    }


    if(!Array.isArray(slides) || slides.length <=0 ){
        return null;
    }
    

    return ( 
        <section className ="slider">
            <FaArrowAltCircleLeft className ="left-arrow" onClick = {prevSlide}/>
            <FaArrowAltCircleRight className ="right-arrow" onClick = {nextSlide}/>

        {ResContent.map((slide,index)=> {
            return(
                <div className = {index === current ? "slide active" :"slide"} key = {index}>
                    {index === current && (<embed src = {slide.image} alt ="resumeInfo" className="image"/>
)}
                </div>
            )
        })}
        </section>
    )
}

export default Slider
