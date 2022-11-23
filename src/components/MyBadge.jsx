import { Container, Row, Badge } from "react-bootstrap";

const MyBadge = ({ color, content }) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <div>
          <h3>
            <Badge variant={color}>{content}</Badge>
          </h3>
        </div>
      </Row>
    </Container>
  );
};

export default MyBadge;
