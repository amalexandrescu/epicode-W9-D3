import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import Welcome from "./components/WarningSigns";
import WarningSigns from "./components/WarningSigns";
import MyBadge from "./components/MyBadge";
import BookList from "./components/BookList";

function App() {
  return (
    <div>
      <WarningSigns variant="danger" stringContent="This is my Alert" />
      <MyBadge color="warning" content="My First Badge" />
      <BookList />
    </div>
  );
}

export default App;
