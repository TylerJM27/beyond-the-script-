// src/pages/AboutPage.js
import { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "motion/react";
import Header from "../components/Header";
import { Card, CardTitle } from "reactstrap";
import headshot from "../app/assets/images/headshot.jpg";
import resumeImage from "../app/assets/images/resume.jpg";
import { WORKS } from "../app/shared/WORKS";

const AboutPage = () => {
    const containerRef = useRef(null);
    const resumeRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const storyTexts = [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        "Neque mollitia similique delectus modi odio quaerat...",
        "Officiis ratione doloribus quasi soluta, ea enim optio...",
        "Final story text that appears as the user continues scrolling...",
    ];

    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
    const [visibleImages, setVisibleImages] = useState([]);
    const [showResume, setShowResume] = useState(false);
    const [allImagesLoaded, setAllImagesLoaded] = useState(false);
    const [isPageReady, setIsPageReady] = useState(false);
    const [readyForLayoutChange, setReadyForLayoutChange] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check screen size
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    // Smooth page initialization
    useEffect(() => {
        const timer = setTimeout(() => setIsPageReady(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // Scroll-driven animation logic with bidirectional support
    useEffect(() => {
        if (!isPageReady) return;

        const unsubscribe = scrollYProgress.onChange((progress) => {
            // Bidirectional image visibility
            const imageCount = Math.floor(progress * WORKS.length * 2);
            const newVisibleImages = [];

            for (let i = 0; i < Math.min(imageCount, WORKS.length); i++) {
                newVisibleImages.push(i);
            }

            setVisibleImages(newVisibleImages);

            // Bidirectional story text
            const storyIndex = Math.floor(progress * storyTexts.length);
            setCurrentStoryIndex(Math.min(storyIndex, storyTexts.length - 1));

            // Bidirectional resume visibility
            setShowResume(progress > 0.6);

            // Only set allImagesLoaded for mobile layout switching
            if (isMobile) {
                setAllImagesLoaded(progress > 0.8);
            } else {
                setAllImagesLoaded(false); // Keep desktop layout static
            }
        });

        return unsubscribe;
    }, [scrollYProgress, isPageReady, storyTexts.length, isMobile]);

    // Delay layout change to avoid scroll snap (mobile only)
    useEffect(() => {
        if (allImagesLoaded && isMobile) {
            const timer = setTimeout(() => {
                setReadyForLayoutChange(true);
                if (resumeRef.current) {
                    resumeRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }, 600);
            return () => clearTimeout(timer);
        } else if (!isMobile) {
            setReadyForLayoutChange(false); // Keep desktop layout fixed
        }
    }, [allImagesLoaded, isMobile]);

    // Reset layout change when scrolling back up on mobile
    useEffect(() => {
        if (isMobile && !allImagesLoaded && readyForLayoutChange) {
            setReadyForLayoutChange(false);
        }
    }, [allImagesLoaded, isMobile, readyForLayoutChange]);

    const shouldUseFixedLayout = isMobile ? !readyForLayoutChange : true;

    return (
        <div
            ref={containerRef}
            style={{
                height: shouldUseFixedLayout ? "400vh" : "auto",
                minHeight: shouldUseFixedLayout ? "400vh" : "100vh",
                position: shouldUseFixedLayout ? "relative" : "static",
            }}
            className="works-page-background"
        >
            <Header />

            {/* Main content container */}
            <div
                style={{
                    position: shouldUseFixedLayout ? "fixed" : "static",
                    top: shouldUseFixedLayout ? "128px" : "auto",
                    left: 0,
                    width: "100vw",
                    height: shouldUseFixedLayout
                        ? "calc(100vh - 8rem)"
                        : "auto",
                    pointerEvents: "none",
                    zIndex: 10,
                }}
                className="flex flex-col items-center justify-center"
            >
                {/* Desktop layout: side by side with resume below */}
                <div className="hidden md:flex md:flex-row md:items-start md:justify-center md:w-full md:h-full md:pt-8">
                    {/* Story card column - left side on desktop */}
                    <div className="flex flex-col justify-center items-center w-1/2 pr-8 h-full">
                        <Card className="bg-cream border-0 relative z-[2] mb-8">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{
                                    opacity: isPageReady ? 1 : 0,
                                    y: isPageReady ? 0 : 30,
                                }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <CardTitle
                                    tag="h1"
                                    className="font-italiana text-4xl lg:text-5xl xl:text-6xl whitespace-nowrap"
                                >
                                    My Story.
                                </CardTitle>
                            </motion.div>

                            <motion.div
                                key={currentStoryIndex}
                                data-testid="story-text-line"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="font-italiana text-center mr-12"
                            >
                                {storyTexts[currentStoryIndex]}
                            </motion.div>
                        </Card>

                        {/* Resume section - below story on desktop */}
                        <div className="flex justify-center items-center mt-8">
                            <motion.div
                                data-testid="resume-tilt"
                                data-tilted={showResume ? "true" : "false"}
                                initial={{
                                    x: "100vw",
                                    rotate: 0,
                                    scale: 0.5,
                                    opacity: 0,
                                }}
                                animate={
                                    showResume
                                        ? {
                                              x: 0,
                                              rotate: -15,
                                              scale: 1,
                                              opacity: 1,
                                          }
                                        : {
                                              x: "100vw",
                                              rotate: 0,
                                              scale: 0.5,
                                              opacity: 0,
                                          }
                                }
                                transition={{
                                    duration: 1.2,
                                    ease: "easeOut",
                                    type: "spring",
                                    stiffness: 50,
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    rotate: -10,
                                    transition: {
                                        duration: 0.3,
                                    },
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}
                                className="cursor-pointer"
                                style={{
                                    transformOrigin: "center center",
                                    pointerEvents: showResume ? "auto" : "none",
                                }}
                                onClick={() => {
                                    window.open(
                                        "https://drive.google.com/file/d/1ywHH6eIPudFVFxAi2lG6ZuRPHDiGL7KA/view?usp=sharing",
                                        "_blank",
                                        "noopener,noreferrer"
                                    );
                                }}
                            >
                                <img
                                    src={resumeImage}
                                    alt="Resume"
                                    className="w-[300px] h-[400px] object-cover rounded-[10px] border-[3px] border-salmon"
                                    style={{
                                        boxShadow:
                                            "0 20px 40px rgba(0,0,0,0.3)",
                                    }}
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Image column - right side on desktop */}
                    <div className="flex flex-col justify-center items-center w-1/2 h-full relative z-[50]">
                        <motion.img
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                                opacity: isPageReady ? 1 : 0,
                                scale: isPageReady ? 1 : 0.8,
                            }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="w-1/2 max-w-[550px] min-w-[250px] h-auto aspect-square object-cover rounded-full border-[5px] border-salmon"
                            src={headshot}
                            alt="Actor Headshot"
                        />

                        {visibleImages.map((imageIndex, i) => (
                            <motion.img
                                key={`roll-up-${imageIndex}`}
                                data-testid="roll-up-image"
                                initial={{ y: "100vh", opacity: 0, scale: 0.8 }}
                                animate={{
                                    y: `${-i * 50}px`,
                                    opacity: 1,
                                    scale: 1,
                                    x: `${
                                        (i % 2 === 0 ? 1 : -1) * ((i + 1) * 30)
                                    }px`,
                                }}
                                transition={{
                                    duration: 1.2,
                                    delay: i * 0.15,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                }}
                                className="absolute w-1/2 max-w-[550px] min-w-[250px] h-auto aspect-square object-cover rounded-full border-[5px] border-salmon"
                                style={{
                                    zIndex: 100 + i,
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                                }}
                                src={WORKS[imageIndex].image}
                                alt={WORKS[imageIndex].altText}
                            />
                        ))}
                    </div>
                </div>

                {/* Mobile layout: original stacked layout */}
                <div className="flex flex-col md:hidden items-center justify-center w-full h-full">
                    <div className="flex flex-row h-full order-1 justify-center items-center pt-32 pb-16 relative z-[50]">
                        <motion.img
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                                opacity: isPageReady ? 1 : 0,
                                scale: isPageReady ? 1 : 0.8,
                            }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="w-1/2 max-w-[550px] min-w-[250px] h-auto aspect-square object-cover rounded-full border-[5px] border-salmon"
                            src={headshot}
                            alt="Actor Headshot"
                        />

                        {visibleImages.map((imageIndex, i) => (
                            <motion.img
                                key={`roll-up-${imageIndex}`}
                                data-testid="roll-up-image"
                                initial={{ y: "100vh", opacity: 0, scale: 0.8 }}
                                animate={{
                                    y: `${-i * 50}px`,
                                    opacity: 1,
                                    scale: 1,
                                    x: `${
                                        (i % 2 === 0 ? 1 : -1) * ((i + 1) * 30)
                                    }px`,
                                }}
                                transition={{
                                    duration: 1.2,
                                    delay: i * 0.15,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                }}
                                className="absolute w-1/2 max-w-[550px] min-w-[250px] h-auto aspect-square object-cover rounded-full border-[5px] border-salmon"
                                style={{
                                    zIndex: 100 + i,
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                                }}
                                src={WORKS[imageIndex].image}
                                alt={WORKS[imageIndex].altText}
                            />
                        ))}
                    </div>

                    {/* Story card column - mobile */}
                    <div className="flex flex-row h-full order-2 justify-center items-center ml-20 z-[2]">
                        <Card className="bg-cream border-0 relative z-[2]">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{
                                    opacity: isPageReady ? 1 : 0,
                                    y: isPageReady ? 0 : 30,
                                }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <CardTitle
                                    tag="h1"
                                    className="font-italiana"
                                    style={{
                                        fontSize: "calc(2rem + 2vw)",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    My Story.
                                </CardTitle>
                            </motion.div>

                            <motion.div
                                key={currentStoryIndex}
                                data-testid="story-text-line"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="font-italiana text-center mr-12"
                            >
                                {storyTexts[currentStoryIndex]}
                            </motion.div>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Resume section for mobile (when layout changes) */}
            {isMobile && (
                <div
                    style={{
                        position: "relative",
                        zIndex: 5,
                        pointerEvents: "auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: readyForLayoutChange ? "50vh" : "0vh",
                    }}
                >
                    <div ref={resumeRef}>
                        <div className="flex flex-row justify-center items-center">
                            <motion.div
                                data-testid="resume-tilt"
                                data-tilted={showResume ? "true" : "false"}
                                initial={{
                                    x: "100vw",
                                    rotate: 0,
                                    scale: 0.5,
                                }}
                                animate={
                                    showResume
                                        ? {
                                              x: 0,
                                              rotate: -15,
                                              scale: 0.7,
                                          }
                                        : {
                                              x: "100vw",
                                              rotate: 0,
                                              scale: 0.5,
                                          }
                                }
                                transition={{
                                    duration: 5,
                                    ease: "easeOut",
                                    type: "spring",
                                    stiffness: 50,
                                }}
                                whileHover={{
                                    scale: 0.75,
                                    rotate: -10,
                                    transition: {
                                        duration: 0.3,
                                    },
                                }}
                                whileTap={{
                                    scale: 0.65,
                                }}
                                className="cursor-pointer"
                                style={{
                                    transformOrigin: "center center",
                                }}
                                onClick={() => {
                                    window.open(
                                        "https://drive.google.com/file/d/1ywHH6eIPudFVFxAi2lG6ZuRPHDiGL7KA/view?usp=sharing",
                                        "_blank",
                                        "noopener,noreferrer"
                                    );
                                }}
                            >
                                <img
                                    src={resumeImage}
                                    alt="Resume"
                                    className="w-[200px] h-[267px] object-cover rounded-[10px] border-[3px] border-salmon"
                                    style={{
                                        boxShadow:
                                            "0 20px 40px rgba(0,0,0,0.3)",
                                    }}
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AboutPage;
