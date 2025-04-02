import { useState } from "react";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from "reactstrap";
import { WORKS } from "../app/shared/WORKS";

const CarouselOfImages = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const nextSlide = () => {
        if (animating) return;
        const nextIndex =
            activeIndex === WORKS.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const prevSlide = () => {
        if (animating) return;
        const prevIndex =
            activeIndex === 0 ? WORKS.length - 1 : activeIndex - 1;
        setActiveIndex(prevIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = WORKS.map((work) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={work.image}
                slide
            >
                <img
                    src={work.image}
                    alt={work.altText}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                    }}
                />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            style={{ width: "100%", height: "100%" }}
            activeIndex={activeIndex}
            next={nextSlide}
            previous={prevSlide}
            pause="hover"
            enableTouch
            {...props}
        >
            <CarouselIndicators
                items={WORKS}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={prevSlide}
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={nextSlide}
            />
        </Carousel>
    );
};

export default CarouselOfImages;
