import { useEffect, useState } from "react"


// @function Slider

const Slider = props => {
    const getWidth = () => window.innerWidth

    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45
    })

    const { translate, transition, activeIndex } = state

    const nextSlide = () => {
        if (activeIndex === props.slides.length - 1) {
            return setState({
                ...state,
                translate: 0,
                activeIndex: 0
            })
        }

        setState({
            ...state,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * getWidth()
        })
    }

    const prevSlide = () => {
        if (activeIndex === 0) {
            return setState({
                ...state,
                translate: (props.slides.length - 1) * getWidth(),
                activeIndex: props.slides.length - 1
            })
        }
    }

        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * getWidth()
        })
        
    
    return (
           <div css={SliderCSS}>
            <SliderContent
             
                translate={translate}
                transition={transition}
                width={getWidth() * props.slides.length}
            >
                {props.slides.map((slide, i) => {
                    <Slide key={slide + i} content={slide}/>
                })}
            </SliderContent>

            <Arrow direction="left" handleClick={prevSlide}/>
            <Arrow direction="right" handleClick={nextSlide}/>

            <Dots slides={props.slides} activeIndex={activeIndex} />
           </div> 
    )
}