import { Component } from "react";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";

class CommentArea extends Component {
  state = {
    bookId: this.props.id,
    singleBookCommets: [],
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
        this.setState({ singleBookCommets: result });
      } else {
        console.log("Error while fetching");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getSingleBookComments();
  }

  render() {
    return (
      <div>
        <h6 className="my-2 bg-primary text-center text-light">
          Comments area
        </h6>
        <CommentsList
          commentsArray={this.state.singleBookCommets}
          id={this.state.bookId}
        />
        <AddComment id={this.state.bookId} />
      </div>
    );
  }
}

export default CommentArea;
