import Header from "../components/Header";
import NavbarToggle from "../components/NavbarToggle";
import { useRef, useState, useEffect } from "react";
import CarouselOfImages from "../components/CarouselOfImages";
import portlandSky from "../app/assets/images/portland-skyline.jpg";

const WorksPage = () => {
    const worksRef = useRef();
    const instructingRef = useRef();
    const directingRef = useRef();
    const firstSectionRef = useRef();

    const [showHeader, setShowHeader] = useState(false);
    const [headerSlideProgress, setHeaderSlideProgress] = useState(0);
    const [animationsTriggered, setAnimationsTriggered] = useState({
        works: false,
        instructing: false,
        directing: false,
    });

    useEffect(() => {
        const handleScroll = () => {
            if (firstSectionRef.current) {
                const firstSectionRect =
                    firstSectionRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Calculate how much of the first section has scrolled out of view
                const scrollProgress = Math.max(
                    0,
                    Math.min(1, -firstSectionRect.top / windowHeight)
                );

                // Show header when we start scrolling past the first section
                if (scrollProgress > 0.1) {
                    setShowHeader(true);
                    setHeaderSlideProgress(scrollProgress);
                } else {
                    setShowHeader(false);
                    setHeaderSlideProgress(0);
                }
            }
        };

        // Trigger animations on mount with staggered delays
        const triggerAnimations = () => {
            setTimeout(() => {
                setAnimationsTriggered((prev) => ({ ...prev, works: true }));
            }, 300);

            setTimeout(() => {
                setAnimationsTriggered((prev) => ({
                    ...prev,
                    instructing: true,
                }));
            }, 600);

            setTimeout(() => {
                setAnimationsTriggered((prev) => ({
                    ...prev,
                    directing: true,
                }));
            }, 900);
        };

        triggerAnimations();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
        // Trigger header animation when scrolling to sections
        setTimeout(() => {
            setShowHeader(true);
            setHeaderSlideProgress(1);
        }, 500);
    };

    return (
        <div className="min-h-screen">
            {/* NavbarToggle - shown initially */}
            <div
                className={`fixed w-full z-20 transition-opacity duration-500 ${
                    showHeader ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
            >
                <NavbarToggle />
            </div>

            {/* Header - slides in from right when scrolling */}
            <div
                className={`fixed w-full z-20 transition-transform duration-300 ${
                    showHeader ? "translate-x-0" : "translate-x-full"
                }`}
                style={{
                    transform: `translateX(${
                        100 - headerSlideProgress * 100
                    }%)`,
                }}
            >
                <Header />
            </div>

            {/* First section with background image */}
            <div
                ref={firstSectionRef}
                className="min-h-screen bg-cover bg-cover bg-no-repeat relative"
                style={{ backgroundImage: `url(${portlandSky})` }}
            >
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Main content with padding to prevent navbar overlap */}
                <div className="relative z-10 flex flex-col justify-around items-center min-h-screen w-full pt-32 pb-16">
                    {/* Created Works Button - slides in from left */}
                    <div
                        className={`flex flex-col md:flex-row items-center mx-4 my-2 transition-all duration-1000 ease-out ${
                            animationsTriggered.works
                                ? "translate-x-0 opacity-100"
                                : "-translate-x-full opacity-0"
                        }`}
                    >
                        <div className="w-full md:w-auto flex justify-center items-center md:pb-0 pb-4">
                            <button
                                className="font-italiana text-xl bg-salmon hover:bg-salmon-dark text-white py-2 px-4 rounded transition-colors backdrop-blur-md bg-opacity-80"
                                onClick={() => handleScrollToSection(worksRef)}
                            >
                                Created Works
                            </button>
                        </div>
                        <div className="font-italiana text-xl text-center md:text-left md:ml-6 text-white backdrop-blur-sm bg-black/20 p-4 rounded">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Voluptatem in provident nobis minus
                            exercitationem quae voluptatum natus at saepe ipsum?
                        </div>
                    </div>

                    {/* Instructing Button - slides in from right */}
                    <div
                        className={`flex flex-col md:flex-row items-center mx-4 my-2 transition-all duration-1000 ease-out ${
                            animationsTriggered.instructing
                                ? "translate-x-0 opacity-100"
                                : "translate-x-full opacity-0"
                        }`}
                    >
                        <div className="w-full md:w-auto flex justify-center items-center md:pb-0 pb-4">
                            <button
                                className="font-italiana text-xl bg-salmon hover:bg-salmon-dark text-white py-2 px-4 rounded transition-colors backdrop-blur-md bg-opacity-80"
                                onClick={() =>
                                    handleScrollToSection(instructingRef)
                                }
                            >
                                Instructing
                            </button>
                        </div>
                        <div className="font-italiana text-xl text-center md:text-left md:ml-6 text-white backdrop-blur-sm bg-black/20 p-4 rounded">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Voluptatem in provident nobis minus
                            exercitationem quae voluptatum natus at saepe ipsum?
                        </div>
                    </div>

                    {/* Directing Button - slides in from left */}
                    <div
                        className={`flex flex-col md:flex-row items-center mx-4 my-2 transition-all duration-1000 ease-out ${
                            animationsTriggered.directing
                                ? "translate-x-0 opacity-100"
                                : "-translate-x-full opacity-0"
                        }`}
                    >
                        <div className="w-full md:w-auto flex justify-center items-center md:pb-0 pb-4">
                            <button
                                className="font-italiana text-xl bg-salmon hover:bg-salmon-dark text-white py-2 px-4 rounded transition-colors backdrop-blur-md bg-opacity-80"
                                onClick={() =>
                                    handleScrollToSection(directingRef)
                                }
                            >
                                Directing
                            </button>
                        </div>
                        <div className="font-italiana text-xl text-center md:text-left md:ml-6 text-white backdrop-blur-sm bg-black/20 p-4 rounded">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Voluptatem in provident nobis minus
                            exercitationem quae voluptatum natus at saepe ipsum?
                        </div>
                    </div>
                </div>
            </div>

            {/* Created Works Section */}
            <div
                ref={worksRef}
                className="flex flex-col justify-center content-center items-center bg-cream min-h-screen w-full pt-16 pb-16 scroll-mt-27"
            >
                <div className="flex flex-col xl:flex-row w-full px-4 xl:px-12">
                    <div className="w-full xl:w-1/3 flex justify-center content-center xl:ml-12 mb-4 order-last">
                        <div className="bg-cream border-none p-4">
                            <h2 className="text-center text-5xl md:text-6xl font-italiana text-salmon mb-4">
                                Created Works.
                            </h2>
                            <p className="text-center font-italiana text-xl">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aliquam cum, eaque consequatur
                                optio officiis distinctio? Excepturi voluptatem
                                vitae optio iure, cum dolores veniam amet
                                doloribus sit cupiditate voluptatum repudiandae
                                obcaecati possimus fugit voluptas harum ut
                                accusamus dicta. Aperiam modi reprehenderit
                                autem architecto magni. Neque a, ducimus ut illo
                                velit enim saepe! Error magnam quia repellat,
                                cumque labore beatae dolorum accusantium
                                blanditiis iusto animi voluptate doloribus ipsa
                                corporis repellendus eius aperiam reiciendis?
                                Nesciunt et error, aliquam rerum maxime
                                consequuntur voluptas, inventore eos corrupti
                                eum doloribus? Velit, labore iusto expedita
                                quasi facere molestias nihil, sed a impedit illo
                                perspiciatis id asperiores sit.
                            </p>
                        </div>
                    </div>
                    <div className="w-full xl:w-7/12 xl:ml-16 flex justify-center items-center content-center">
                        <div className="w-4/5 overflow-hidden">
                            <CarouselOfImages />
                        </div>
                    </div>
                </div>
            </div>

            {/* Instructing Section */}
            <div
                ref={instructingRef}
                className="flex flex-col justify-center content-center items-center bg-cream min-h-screen w-full pt-16 pb-16 scroll-mt-16"
            >
                <div className="flex flex-col-reverse xl:flex-row w-full px-4 xl:px-12">
                    <div className="w-full xl:w-7/12 xl:ml-8 flex justify-center items-center mt-8 xl:mt-0 order-last xl:order-first">
                        <div className="w-4/5 overflow-hidden">
                            <CarouselOfImages />
                        </div>
                    </div>
                    <div className="w-full xl:w-1/3 flex justify-center content-center xl:ml-12 mb-4">
                        <div className="bg-cream border-none p-4">
                            <h2 className="text-center text-5xl md:text-6xl font-italiana text-salmon mb-4">
                                Instructing.
                            </h2>
                            <p className="text-center font-italiana text-xl">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aliquam cum, eaque consequatur
                                optio officiis distinctio? Excepturi voluptatem
                                vitae optio iure, cum dolores veniam amet
                                doloribus sit cupiditate voluptatum repudiandae
                                obcaecati possimus fugit voluptas harum ut
                                accusamus dicta. Aperiam modi reprehenderit
                                autem architecto magni. Neque a, ducimus ut illo
                                velit enim saepe! Error magnam quia repellat,
                                cumque labore beatae dolorum accusantium
                                blanditiis iusto animi voluptate doloribus ipsa
                                corporis repellendus eius aperiam reiciendis?
                                Nesciunt et error, aliquam rerum maxime
                                consequuntur voluptas, inventore eos corrupti
                                eum doloribus? Velit, labore iusto expedita
                                quasi facere molestias nihil, sed a impedit illo
                                perspiciatis id asperiores sit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Directing Section */}
            <div
                ref={directingRef}
                className="flex flex-col justify-center content-center items-center bg-cream min-h-screen w-full pt-16 pb-16 scroll-mt-16"
            >
                <div className="flex flex-col xl:flex-row w-full px-4 xl:px-12">
                    <div className="w-full xl:w-1/3 flex justify-center content-center xl:ml-12 mb-4 order-last">
                        <div className="bg-cream border-none p-4">
                            <h2 className="text-center text-5xl md:text-6xl font-italiana text-salmon mb-4">
                                Directing.
                            </h2>
                            <p className="text-center font-italiana text-xl">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aliquam cum, eaque consequatur
                                optio officiis distinctio? Excepturi voluptatem
                                vitae optio iure, cum dolores veniam amet
                                doloribus sit cupiditate voluptatum repudiandae
                                obcaecati possimus fugit voluptas harum ut
                                accusamus dicta. Aperiam modi reprehenderit
                                autem architecto magni. Neque a, ducimus ut illo
                                velit enim saepe! Error magnam quia repellat,
                                cumque labore beatae dolorum accusantium
                                blanditiis iusto animi voluptate doloribus ipsa
                                corporis repellendus eius aperiam reiciendis?
                                Nesciunt et error, aliquam rerum maxime
                                consequuntur voluptas, inventore eos corrupti
                                eum doloribus? Velit, labore iusto expedita
                                quasi facere molestias nihil, sed a impedit illo
                                perspiciatis id asperiores sit.
                            </p>
                        </div>
                    </div>
                    <div className="w-full xl:w-7/12 xl:ml-16 flex justify-center items-center">
                        <div className="w-4/5 overflow-hidden">
                            <CarouselOfImages />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorksPage;
