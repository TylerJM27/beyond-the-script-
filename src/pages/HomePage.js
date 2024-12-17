import {
    Row,
    Col,
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    CardText,
    CardSubtitle,
} from "reactstrap";
import NavbarToggle from "../components/NavbarToggle";
import TheaterView from "../app/assets/images/theater.jpg";
import ActressProfile from "../app/assets/images/actress-profile.jpg";

const HomePage = () => {
    return (
        <>
            <NavbarToggle />
            <Card fluid inverse>
                <CardImg
                    alt="actress-profile"
                    src={ActressProfile}
                    className="card-img-full-screen"
                />
                <CardImgOverlay className="d-flex flex-column justify-content-center align-items-center text-center">
                    <Row>
                        <Col>
                            <CardTitle
                                tag="h1"
                                className="display-4"
                                style={{
                                    fontSize: "calc(2rem + 2vw)",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                JENNI GREEN - MILLER
                            </CardTitle>
                            <CardSubtitle tag="h5">
                                ACTOR - WRITER - INSTRUCTOR
                            </CardSubtitle>
                        </Col>
                    </Row>
                </CardImgOverlay>
            </Card>
            <Card fluid inverse>
                <CardImg
                    alt="theater-view"
                    src={TheaterView}
                    className="card-img-full-screen"
                />
                <CardImgOverlay className="d-flex flex-column justify-content-center">
                    <Row>
                        <Col
                            xs="12"
                            md={{ size: 6, offset: 1 }}
                            lg={{ size: 6, offset: 0.25 }}
                        >
                            <CardTitle
                                tag="h1"
                                className="text-start text-center display-4"
                                style={{
                                    fontSize: "calc(2rem + 2vw)",
                                    whiteSpace: "nowrap",
                                    textAlign: "left",
                                    marginRight: "auto",
                                    marginLeft: "auto",
                                }}
                            >
                                Mission Statement :
                            </CardTitle>
                        </Col>
                    </Row>
                    <Row>
                        <Col
                            xs="12"
                            md={{ size: 8, offset: 2 }}
                            lg={{ size: 6, offset: 4 }}
                        >
                            <CardText
                                body
                                className="text-end text-center my-5"
                                style={{
                                    textAlign: "right",
                                    marginRight: "auto",
                                    marginLeft: "auto",
                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Consectetur magni ipsam fugit,
                                saepe nulla minus fuga ad quod nihil debitis
                                iste esse, quam repudiandae! Quam corrupti
                                deserunt nulla quod minima adipisci vitae,
                                labore cum distinctio aperiam voluptas tenetur
                                exercitationem voluptatem totam consequuntur
                                quis eveniet maxime sint nesciunt. Delectus,
                                magni officiis id accusantium harum sit
                                cupiditate earum quo maiores, cumque dolorum
                                repellendus. Aliquid, voluptate doloremque
                                similique in quasi soluta ducimus veniam totam
                                quos sed eveniet. Veritatis inventore
                                exercitationem necessitatibus fugiat magni
                                libero, dolore voluptas. Veritatis error impedit
                                harum non minima quisquam ullam repellat aperiam
                                autem qui adipisci excepturi nemo, quis veniam.
                            </CardText>
                        </Col>
                    </Row>
                </CardImgOverlay>
            </Card>
        </>
    );
};

export default HomePage;
