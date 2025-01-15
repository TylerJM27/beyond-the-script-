import Header from "../components/Header";
import { useRef } from "react";
import { Row, Col, Button, Card, CardTitle, CardText } from "reactstrap";
import CarouselOfImages from "../components/CarouselOfImages";

const WorksPage = () => {
    const worksRef = useRef();
    const instructingRef = useRef();
    const directingRef = useRef();

    return (
        <div className="works-page-background">
            <div style={{ position: "fixed", width: "100vw", zIndex: 10 }}>
                <Header />
            </div>
            <div
                className="d-flex flex-column justify-content-around align-items-center"
                style={{ height: "100vh", width: "100%", zIndex: -1 }}
            >
                <Row className="d-flex align-items-center mx-4 my-2 mt-5">
                    <Col
                        xs="12"
                        xl="auto"
                        className="d-flex justify-content-center align-items-center"
                        style={{ paddingBottom: "20px" }}
                    >
                        <Button
                            style={{
                                fontFamily: "Italiana",
                                fontSize: "20px",
                                backgroundColor: "#e98074",
                            }}
                            className="website-button"
                            onClick={() => {
                                worksRef.current.scrollIntoView();
                            }}
                        >
                            Created Works
                        </Button>
                    </Col>
                    <Col
                        className=" d-flex justify-content-center align-items-center"
                        style={{ fontFamily: "Italiana", fontSize: "20px" }}
                    >
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Voluptatem in provident nobis minus exercitationem
                        quae voluptatum natus at saepe ipsum?
                    </Col>
                </Row>
                <Row className="d-flex align-items-center mx-4 my-2">
                    <Col
                        xs="12"
                        xl="auto"
                        className="d-flex justify-content-center align-items-center"
                        style={{ paddingBottom: "20px" }}
                    >
                        <Button
                            style={{
                                fontFamily: "Italiana",
                                fontSize: "20px",
                                backgroundColor: "#e98074",
                            }}
                            className="website-button"
                            onClick={() => {
                                instructingRef.current.scrollIntoView();
                            }}
                        >
                            Instructing
                        </Button>
                    </Col>
                    <Col
                        className="d-flex justify-content-center align-items-center"
                        style={{ fontFamily: "Italiana", fontSize: "20px" }}
                    >
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Voluptatem in provident nobis minus exercitationem
                        quae voluptatum natus at saepe ipsum?
                    </Col>
                </Row>
                <Row className="d-flex  align-items-center mx-4 my-2">
                    <Col
                        xs="12"
                        xl="auto"
                        className="d-flex justify-content-center align-items-center"
                        style={{ paddingBottom: "20px" }}
                    >
                        <Button
                            style={{
                                fontFamily: "Italiana",
                                fontSize: "20px",
                                backgroundColor: "#e98074",
                            }}
                            className="website-button"
                            onClick={() => {
                                directingRef.current.scrollIntoView();
                            }}
                        >
                            Directing
                        </Button>
                    </Col>
                    <Col
                        className="d-flex justify-content-center align-items-center"
                        style={{ fontFamily: "Italiana", fontSize: "20px" }}
                    >
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Voluptatem in provident nobis minus exercitationem
                        quae voluptatum natus at saepe ipsum?
                    </Col>
                </Row>
            </div>
            <div
                ref={worksRef}
                className="d-flex flex-column justify-content-around align-items-center works-page-background"
                style={{
                    height: "100vh",
                    width: "100%",
                    scrollMarginTop: "100px",
                }}
            >
                <Row>
                    <Col xs="12" xl={{ size: 3, offset: 1 }}>
                        <Card
                            body
                            className="my-2"
                            style={{
                                width: "auto",
                                height: "auto",
                                border: "none",
                                backgroundColor: "#eae7dc",
                            }}
                        >
                            <CardTitle
                                className="my-2 text-center"
                                style={{
                                    fontSize: "calc(2rem + 2vw)",
                                    fontFamily: "Italiana",
                                    whiteSpace: "nowrap",
                                    textAlign: "left",
                                    marginRight: "auto",
                                    marginLeft: "auto",
                                    color: "#e98074",
                                }}
                            >
                                Created Works.
                            </CardTitle>
                            <CardText
                                body
                                className="text-center"
                                style={{
                                    fontFamily: "Italiana",
                                    fontSize: "20px",
                                }}
                            >
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
                            </CardText>
                        </Card>
                    </Col>
                    <Col
                        xs="12"
                        xl={{ size: 7, offset: 1 }}
                        className="d-flex justify-content-center align-items-center"
                    >
                        <div
                            style={{
                                width: "80%",
                                height: "auto",
                                overflow: "hidden",
                            }}
                        >
                            <CarouselOfImages />
                        </div>
                    </Col>
                </Row>
            </div>
            <div
                ref={instructingRef}
                className="d-flex flex-column justify-content-around align-items-center works-page-background"
                style={{
                    height: "100vh",
                    width: "100%",
                    scrollMarginTop: "100px",
                }}
            >
                <Row>
                    <Col
                        xs="12"
                        xl={{ size: 7, offset: 1 }}
                        className="d-flex justify-content-center align-items-center"
                    >
                        <div
                            style={{
                                width: "80%",
                                height: "auto",

                                overflow: "hidden",
                            }}
                        >
                            <CarouselOfImages />
                        </div>
                    </Col>
                    <Col xs="12" xl="3">
                        <Card
                            body
                            className="my-2"
                            style={{
                                width: "auto",
                                height: "auto",
                                border: "none",
                                backgroundColor: "#eae7dc",
                            }}
                        >
                            <CardTitle
                                className="my-2 text-center"
                                style={{
                                    fontSize: "calc(2rem + 2vw)",
                                    fontFamily: "Italiana",
                                    whiteSpace: "nowrap",
                                    textAlign: "left",
                                    marginRight: "auto",
                                    marginLeft: "auto",
                                    color: "#e98074",
                                }}
                            >
                                Instructing.
                            </CardTitle>
                            <CardText
                                body
                                className="text-center"
                                style={{
                                    fontFamily: "Italiana",
                                    fontSize: "20px",
                                }}
                            >
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
                                <br />
                            </CardText>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div
                ref={directingRef}
                className="d-flex flex-column justify-content-around align-items-center works-page-background"
                style={{
                    height: "100vh",
                    width: "100%",
                    scrollMarginTop: "100px",
                }}
            >
                <Row>
                    <Col xs="12" xl={{ size: 3, offset: 1 }}>
                        <Card
                            body
                            className="my-2"
                            style={{
                                width: "auto",
                                height: "auto",
                                border: "none",
                                backgroundColor: "#eae7dc",
                            }}
                        >
                            <CardTitle
                                className="my-2 text-center"
                                style={{
                                    fontSize: "calc(2rem + 2vw)",
                                    fontFamily: "Italiana",
                                    whiteSpace: "nowrap",
                                    textAlign: "left",
                                    marginRight: "auto",
                                    marginLeft: "auto",
                                    color: "#e98074",
                                }}
                            >
                                Directing.
                            </CardTitle>
                            <CardText
                                body
                                className="text-center"
                                style={{
                                    fontFamily: "Italiana",
                                    fontSize: "20px",
                                }}
                            >
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
                            </CardText>
                        </Card>
                    </Col>
                    <Col
                        xs="12"
                        xl={{ size: 7, offset: 1 }}
                        className="d-flex justify-content-center align-items-center"
                    >
                        <div
                            style={{
                                width: "80%",
                                height: "auto",

                                overflow: "hidden",
                            }}
                        >
                            <CarouselOfImages />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default WorksPage;
