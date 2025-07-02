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
        offset: ["start start", "end end"],
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

    // Smooth page initialization
    useEffect(() => {
        const timer = setTimeout(() => setIsPageReady(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // Scroll-driven animation logic
    useEffect(() => {
        if (!isPageReady) return;

        const unsubscribe = scrollYProgress.onChange((progress) => {
            const imageCount = Math.floor(progress * WORKS.length * 2);
            const newVisibleImages = [];

            for (let i = 0; i < Math.min(imageCount, WORKS.length); i++) {
                newVisibleImages.push(i);
            }

            // Only update if different
            setVisibleImages((prev) => {
                const last = prev[prev.length - 1] ?? -1;
                if (
                    newVisibleImages.length !== prev.length ||
                    last !== newVisibleImages[newVisibleImages.length - 1]
                ) {
                    return newVisibleImages;
                }
                return prev;
            });

            const storyIndex = Math.floor(progress * storyTexts.length);
            setCurrentStoryIndex(Math.min(storyIndex, storyTexts.length - 1));

            setShowResume(progress > 0.8);
            setAllImagesLoaded(progress > 0.6);
        });

        return unsubscribe;
    }, [scrollYProgress, isPageReady, storyTexts.length]);

    // Delay layout change to avoid scroll snap
    useEffect(() => {
        if (allImagesLoaded) {
            const timer = setTimeout(() => {
                setReadyForLayoutChange(true);
                if (resumeRef.current) {
                    resumeRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }, 600); // delay long enough for animations to finish
            return () => clearTimeout(timer);
        }
    }, [allImagesLoaded]);

    return (
        <div
            ref={containerRef}
            style={{
                height: readyForLayoutChange ? "auto" : "400vh",
                minHeight: readyForLayoutChange ? "75vh" : "400vh",
                position: readyForLayoutChange ? "static" : "relative",
            }}
            className="works-page-background"
        >
            <Header />

            {/* Fixed container for headshot + animated images */}
            <div
                style={{
                    position: readyForLayoutChange ? "static" : "fixed",
                    top: readyForLayoutChange ? "auto" : "128px",
                    left: 0,
                    width: "100vw",
                    height: readyForLayoutChange
                        ? "auto"
                        : "calc(100vh - 8rem)",
                    pointerEvents: "none",
                    zIndex: 10,
                }}
                className="flex flex-col md:flex-row items-center justify-center"
            >
                {/* Image column */}
                <div
                    className="flex flex-row h-full md:flex-col order-1 md:order-2 md:grow md:w-1/2 justify-content-center align-items-center pt-32 pb-16"
                    style={{ position: "relative", zIndex: 50 }}
                >
                    <motion.img
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: isPageReady ? 1 : 0,
                            scale: isPageReady ? 1 : 0.8,
                        }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{
                            width: "50%",
                            maxWidth: "550px",
                            minWidth: "250px",
                            height: "auto",
                            aspectRatio: "1/1",
                            objectFit: "cover",
                            borderRadius: "50%",
                        }}
                        className="border-5 border-salmon"
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
                            style={{
                                position: "absolute",
                                width: "50%",
                                maxWidth: "550px",
                                minWidth: "250px",
                                height: "auto",
                                aspectRatio: "1/1",
                                objectFit: "cover",
                                borderRadius: "50%",
                                zIndex: 100 + i,
                                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                            }}
                            className="border-5 border-salmon"
                            src={WORKS[imageIndex].image}
                            alt={WORKS[imageIndex].altText}
                        />
                    ))}
                </div>

                {/* Story card column */}
                <div
                    className="flex flex-row md:flex-col h-full order-2 md:order-1 md:w-1/2 md:flex-grow md:pr-8 justify-content-center align-items-center ml-20 md:ml-0 md:pr-20"
                    style={{ zIndex: 2 }}
                >
                    <Card
                        style={{
                            backgroundColor: "#eae7dc",
                            border: "none",
                            position: "relative",
                            zIndex: 2,
                        }}
                    >
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
                                style={{
                                    fontFamily: "Italiana",
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
                            style={{
                                fontFamily: "Italiana",
                                textAlign: "center",
                                marginRight: "50px",
                            }}
                        >
                            {storyTexts[currentStoryIndex]}
                        </motion.div>
                    </Card>
                </div>
            </div>

            {/* Resume section */}
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
                    <div className="flex flex-row justify-content-center align-items-center">
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
                                          scale:
                                              window.innerWidth < 768 ? 0.7 : 1,
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
                                scale: window.innerWidth < 768 ? 0.75 : 1.05,
                                rotate: -10,
                                transition: {
                                    duration: 0.3,
                                },
                            }}
                            whileTap={{
                                scale: window.innerWidth < 768 ? 0.65 : 0.95,
                            }}
                            style={{
                                cursor: "pointer",
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
                                style={{
                                    width:
                                        window.innerWidth < 768
                                            ? "200px"
                                            : "300px",
                                    height:
                                        window.innerWidth < 768
                                            ? "267px"
                                            : "400px",
                                    objectFit: "cover",
                                    borderRadius: "10px",
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                                    border: "3px solid #e98074",
                                }}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
