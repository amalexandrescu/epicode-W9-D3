import { Card } from "react-bootstrap";
import { Component } from "react";

// const SingleBook = ({ book }) => {
//   return (
//     // <Container>
//     //   <h2>Single Book</h2>
//     //   <Row>
//     <div className="col-6 col-sm-4 col-md-3 col-lg-3 mb-3 mx-auto">
//       <Card>
//         <Card.Img variant="top" src={book.img} />
//         <Card.Body>
//           <Card.Title>{book.title}</Card.Title>
//         </Card.Body>
//       </Card>
//     </div>
//     //   </Row>
//     // </Container>
//   );
// };

class SingleBook extends Component {
  state = {
    selected: false,
  };

  selectCard = (event) => {
    this.setState({
      selected: !this.state.selected,
    });
  };

  render() {
    return (
      <div
        className={`col-6 col-sm-4 col-md-3 col-lg-3 mb-3 mx-auto`}
        // className={`col-6 col-sm-4 col-md-3 col-lg-3 mb-3 mx-auto ${
        //   this.state.selected ? "border-red" : ""
        // }`}
      >
        <Card
          className={`${this.state.selected ? "shadow-dark" : ""}`}
          onClick={(event) => this.selectCard(event)}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default SingleBook;
