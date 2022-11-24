import { Component } from "react";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";
import { Spinner } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    bookId: this.props.id,
    singleBookCommets: [],
    isLoading: true,
  };

  getSingleBookComments = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.id}`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdmNThmNGQ4MzkzNTAwMTVlOGM0YTQiLCJpYXQiOjE2NjkyOTAyMjgsImV4cCI6MTY3MDQ5OTgyOH0.mx34o8m4iZi7tqC_ghliyE-WV4X9Bysa6Q44k9-W9-A",
          },
        }
      );

      if (response.ok) {
        let result = await response.json();
        console.log(result);
        this.setState({ singleBookCommets: result, isLoading: false });
      } else {
        console.log("Error while fetching");
        this.setState({ isLoading: true });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: true });
    }
  };

  componentDidMount() {
    this.getSingleBookComments();
  }

  render() {
    return (
      <div className="mt-2 border-rounded">
        <h6 className="mb-0 bg-primary text-center text-light">
          Comments area
        </h6>
        {this.state.isLoading && (
          <div className="d-flex justify-content-center my-2">
            <Spinner animation="border" role="status"></Spinner>
          </div>
        )}
        <CommentsList
          getSingleBookComments={this.getSingleBookComments}
          commentsArray={this.state.singleBookCommets}
          id={this.state.bookId}
        />
        <AddComment
          id={this.state.bookId}
          getSingleBookComments={this.getSingleBookComments}
        />
      </div>
    );
  }
}

export default CommentArea;
