import { Component } from "react";
import { ListGroup, Button } from "react-bootstrap";

//this class has as props currentComment from CommentsLists.jsx
//in this prop we have a single comment which we have to render inside our div
class SingleComment extends Component {
  state = {
    hovered: false,
  };

  // showRemoveButton = () => {
  //   this.setState({
  //     hovered: true,
  //   });
  // };

  removeComment = async () => {
    let data = await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${this.props.currentComment._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdmNThmNGQ4MzkzNTAwMTVlOGM0YTQiLCJpYXQiOjE2NjkyOTAyMjgsImV4cCI6MTY3MDQ5OTgyOH0.mx34o8m4iZi7tqC_ghliyE-WV4X9Bysa6Q44k9-W9-A",
        },
      }
    );

    try {
      if (data.ok) {
        alert("A comment was removed!");
      } else {
        alert("An error occured and the comment was not removed");
      }
    } catch (error) {
      console.log("An error occured");
    }
  };

  // removeButtonClicked = async () => {
  //   await this.removeComment();
  // };

  // componentDidMount() {
  //   this.removeButtonClicked();
  // }

  render() {
    return (
      <ListGroup.Item
        // onMouseOver={this.showRemoveButton()}
        className="bg-success write-just-on-one-line"
      >
        {/* ${this.state.hovered ? "d-block" : "d-none"}` */}
        {/* {`${this.state.selected ? "shadow-dark" : ""}`} */}
        <Button
          variant="outline-danger"
          className="mr-2"
          // onClick={this.removeButtonClicked()}
        >
          bin
          {/* <i className="bi bi-trash3-fill"></i> */}
          {/* <Trash3-fill></Trash3-fill> */}
          {/* <Icon.Trash3-fill /> */}
        </Button>
        {this.props.currentComment.comment}
      </ListGroup.Item>
    );
  }
}

export default SingleComment;
