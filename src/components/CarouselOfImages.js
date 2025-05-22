import { useState } from "react";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from "reactstrap";
import { WORKS } from "../app/shared/WORKS";

const CarouselOfImages = ({ showProjectDetails = false }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    // These functions are correct, the issue might be with the Reactstrap component
    // Let's ensure we're properly binding them to the controls
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

    // Added project details overlay for ProjectsPage

    return (
        <div className="h-full w-full">
            <Carousel
                className="h-full w-full"
                activeIndex={activeIndex}
                next={nextSlide}
                previous={prevSlide}
                pause="hover"
                dark={false}
                enableTouch
            >
                <CarouselIndicators
                    items={WORKS}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                />
                {WORKS.map((work) => (
                    <CarouselItem
                        onExiting={() => setAnimating(true)}
                        onExited={() => setAnimating(false)}
                        key={work.image}
                        slide
                        className="h-full w-full"
                    >
                        <div className="relative h-full w-full ">
                            <img
                                src={work.image}
                                alt={work.altText}
                                className="h-full w-full object-cover rounded-3xl"
                            />

                            {/* Project details overlay - only shown when showProjectDetails is true */}
                            {showProjectDetails && (
                                <>
                                    {/* Project title in top left */}
                                    <div className="absolute top-6 left-12 text-white p-2 text-xl md:text-4xl">
                                        {work.altText || "Project Title"}
                                    </div>

                                    {/* Project link in bottom right */}
                                    {work.projectUrl && (
                                        <a
                                            href={work.projectUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute z-[999] bottom-6 right-6 bg-white bg-opacity-25 text-white p-2 rounded hover:bg-opacity-50 transition-all"
                                        >
                                            View Project
                                        </a>
                                    )}
                                </>
                            )}
                        </div>
                    </CarouselItem>
                ))}
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
        </div>
    );
};

export default CarouselOfImages;
