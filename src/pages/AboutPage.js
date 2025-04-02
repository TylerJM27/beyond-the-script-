import Header from "../components/Header";
import { Row, Col, Button, Card, CardTitle, CardText } from "reactstrap";
import headshot from "../app/assets/images/headshot.jpg";

const AboutPage = () => {
    return (
        <div className="works-page-background vh-100">
            <Header />
            <div className=" d-flex flex-column justify-content-around align-items-center mt-5 pt-5">
                <Row
                    style={{ height: "100%" }}
                    className="d-flex align-items-center justify-content-center mx-4 my-2 mt-5"
                >
                    <Col
                        className="d-flex  justify-content-center align-items-center"
                        style={{ height: "100%" }}
                    >
                        <img
                            style={{
                                width: "50%",
                                maxWidth: "550px",
                                minWidth: "250px",
                                height: "auto",
                                aspectRatio: "1/1",
                                objectFit: "cover",
                                borderRadius: "50%",
                            }}
                            src={headshot}
                            alt="Actor Headshot"
                        />
                    </Col>
                    <Col
                        xs="12"
                        xl="6"
                        className="d-flex justify-content-center align-items-center"
                        style={{ height: "100%" }}
                    >
                        <Card
                            style={{
                                backgroundColor: "#eae7dc",
                                border: "none",
                            }}
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
                            <CardText
                                style={{
                                    fontFamily: "Italiana",
                                    textAlign: "center",
                                    marginRight: "50px",
                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Tenetur natus rem expedita
                                vitae consequuntur quae aliquam, saepe eligendi
                                magni eos officia maxime ipsum numquam
                                necessitatibus, nobis voluptates ad omnis
                                dolores quam itaque consequatur! Neque mollitia
                                similique delectus modi odio quaerat tempore
                                iusto nobis asperiores! Fugit suscipit aliquid
                                dignissimos at adipisci qui repellendus esse
                                inventore voluptatem sequi sed cupiditate
                                asperiores minima nesciunt, dolorum iure.
                                Officiis ratione doloribus quasi soluta, ea enim
                                optio minima suscipit cumque natus qui
                                consectetur vitae error, possimus eius
                                praesentium fugit aspernatur! Voluptate minus
                                recusandae blanditiis nobis quaerat officiis,
                                veritatis molestias odit labore ipsa minima ex
                                aliquid velit?
                            </CardText>
                        </Card>
                    </Col>
                </Row>
            </div>
            <Row className="d-flex justify-content-center align-items-center">
                <Col className="d-flex justify-content-center align-items-center mt-5">
                    <Button
                        className="website-button mt-5"
                        style={{
                            width: "auto",
                            height: "auto",
                            fontFamily: "Italiana",
                            fontSize: "25px",
                            backgroundColor: "#e98074",
                            textAlign: "center",
                        }}
                        href={
                            "https://drive.google.com/file/d/1ywHH6eIPudFVFxAi2lG6ZuRPHDiGL7KA/view?usp=sharing"
                        }
                        target="blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default AboutPage;
