import { Alert, Container, Row } from "react-bootstrap";

const WarningSigns = (props) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Alert variant={props.variant}>{props.stringContent}</Alert>
      </Row>
    </Container>
  );
};

export default WarningSigns;
