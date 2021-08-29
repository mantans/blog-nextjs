
import { Row, Col, Media, Image } from "react-bootstrap"

const AuthorIntro = () =>
<Row>
    <Col md="8">
        {/* AUTHOR INTRO STARTS */}
        <Media className="mb-4 admin-intro">
            <Image
            roundedCircle
            width={64}
            height={64}
            className="mr-3"
            src="https://avatars.githubusercontent.com/u/39434528?s=400&u=7af9d75e700cebb9722824e56df7952b73eba3e3&v=4"
            alt="Author avatar pic"
            />
            <Media.Body>
            <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
            <p className="welcome-text">
            My name is Manuel and I am a freelance web developer, tech lover and bikes enthusiast !
            And this is my blog designed to improve my dev skills.
            </p>
            </Media.Body>
        </Media>
        {/* AUTHOR INTRO ENDS */}
    </Col>
</Row>

export default AuthorIntro