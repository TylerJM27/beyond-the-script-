import Header from "../components/Header";
import CarouselOfImages from "../components/CarouselOfImages";

const ProjectsPage = () => {
    return (
        <div className="bg-[#eae7dc] h-screen flex flex-col">
            <div className="w-full">
                <Header />
            </div>

            {/* Carousel container with responsive height */}

            {/* Pass showProjectDetails prop to enable project overlays */}
            <div className="flex-1 min-h-0 mt-0 m-3 roundex-3xl">
                <CarouselOfImages showProjectDetails={true} />
            </div>
        </div>
    );
};

export default ProjectsPage;
