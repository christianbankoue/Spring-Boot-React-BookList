import { useEffect, useState } from "react";
import { Col, Container, Navbar } from "react-bootstrap"

const Footer = () => {
    const [fullYear, setFullYear] = useState();

    useEffect(()=>{
        setFullYear(new Date().getFullYear())
    }, [fullYear])

    return (
        <Navbar fixed="bottom" bg="dark" variant="dark">
            <Container>
                <Col lg={12} className="text-center text-muted">
                <div>
                    {fullYear}-{fullYear + 1}, All Rights Reserved by Christian Bankoue Java
                </div>
                </Col>
            </Container>
        </Navbar>
    )
    
}

export default Footer;