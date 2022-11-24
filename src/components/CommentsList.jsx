import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  //this class has as props commentsArray which is basically the array with the comments
  //and also an id props
  //we need to render them now
  render() {
    return (
      <ListGroup className="bg-warning">
        test
        {this.props.commentsArray.map((comment) => {
          return <SingleComment key={comment._id} currentComment={comment} />;
        })}
      </ListGroup>
    );
    // {
    //   console.log(this.props.commentsArray);
    // }
  }
}

export default CommentsList;
