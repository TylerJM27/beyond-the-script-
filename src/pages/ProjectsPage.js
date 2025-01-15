import { useEffect } from "react";
import Header from "../components/Header";
import CarouselOfImages from "../components/CarouselOfImages";

const ProjectsPage = () => {
    return (
        <div style={{ backgroundColor: "#eae7dc" }}>
            <Header />
            <div
                style={{
                    top: 0,
                    left: 0,
                    paddingBottom: "500px",
                    width: "100vw",
                    height: "100vh",
                }}
            >
                <CarouselOfImages />
            </div>
        </div>
    );
};

export default ProjectsPage;
