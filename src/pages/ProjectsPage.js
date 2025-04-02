import Header from "../components/Header";
import CarouselOfImages from "../components/CarouselOfImages";

const ProjectsPage = () => {
    return (
        <div
            style={{
                backgroundColor: "#eae7dc",
                height: "100vh",
                overflow: "hidden",
            }}
        >
            <div style={{ postion: "absolute" }}>
                <Header />
            </div>
            <div>
                <CarouselOfImages />
            </div>
        </div>
    );
};

export default ProjectsPage;
