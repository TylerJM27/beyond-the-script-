import Header from "../components/Header";
import { useRef } from "react";
import CarouselOfImages from "../components/CarouselOfImages";

const WorksPage = () => {
    const worksRef = useRef();
    const instructingRef = useRef();
    const directingRef = useRef();

    return (
        <div className="min-h-screen bg-cream">
            {/* Fixed header with proper z-index */}
            <div className="fixed w-full z-10">
                <Header />
            </div>

            {/* Main content with padding to prevent header overlap */}
            <div className="flex flex-col justify-around items-center min-h-screen w-full pt-32 pb-16">
                <div className="flex flex-col md:flex-row items-center mx-4 my-2">
                    <div className="w-full md:w-auto flex justify-center items-center md:pb-0 pb-4">
                        <button
                            className="font-italiana text-xl bg-salmon hover:bg-salmon-dark text-white py-2 px-4 rounded transition-colors"
                            onClick={() => {
                                worksRef.current.scrollIntoView();
                            }}
                        >
                            Created Works
                        </button>
                    </div>
                    <div className="font-italiana text-xl text-center md:text-left md:ml-6 ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Voluptatem in provident nobis minus exercitationem
                        quae voluptatum natus at saepe ipsum?
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center mx-4 my-2">
                    <div className="w-full md:w-auto flex justify-center items-center md:pb-0 pb-4">
                        <button
                            className="font-italiana text-xl bg-salmon hover:bg-salmon-dark text-white py-2 px-4 rounded transition-colors"
                            onClick={() => {
                                instructingRef.current.scrollIntoView();
                            }}
                        >
                            Instructing
                        </button>
                    </div>
                    <div className="font-italiana text-xl text-center md:text-left md:ml-6">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Voluptatem in provident nobis minus exercitationem
                        quae voluptatum natus at saepe ipsum?
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center mx-4 my-2">
                    <div className="w-full md:w-auto flex justify-center items-center md:pb-0 pb-4">
                        <button
                            className="font-italiana text-xl bg-salmon hover:bg-salmon-dark text-white py-2 px-4 rounded transition-colors"
                            onClick={() => {
                                directingRef.current.scrollIntoView();
                            }}
                        >
                            Directing
                        </button>
                    </div>
                    <div className="font-italiana text-xl text-center md:text-left md:ml-6">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Voluptatem in provident nobis minus exercitationem
                        quae voluptatum natus at saepe ipsum?
                    </div>
                </div>
            </div>

            {/* Created Works Section */}
            <div
                ref={worksRef}
                className="flex flex-col justify-center content-center items-center bg-cream min-h-screen w-full pt-16 pb-16 scroll-mt-16"
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
