import { Component } from "react";
import Header from "./components/blocks/Header/Header.jsx";
import Presentation from "./components/blocks/Presentation/Presentation.jsx";
import WeAre from "./components/blocks/WeAre/WeAre.jsx";
import Custom from "./components/blocks/Custom/Custom.jsx";
import WeHave from "./components/blocks/WeHave/WeHave.jsx";
import Comments from "./components/blocks/Comments/Comments.jsx";
import Subscribe from "./components/blocks/Subscribe/Subscribe.jsx";
import Footer from "./components/blocks/Footer/Footer.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      burgerActive: false,
      supplies: [
        { title: "Desk", img: require("./assets/images/desk-card.jpg"), id: 0 },
        {
          title: "Chair",
          img: require("./assets/images/chair-card.jpg"),
          id: 1,
        },
        {
          title: "Kitchenware",
          img: require("./assets/images/kitchenware-card.jpg"),
          id: 2,
        },
        {
          title: "Book Shelf",
          img: require("./assets/images/book-shelf-card.jpg"),
          id: 3,
        },
        {
          title: "Electronics",
          img: require("./assets/images/electronics.jpg"),
          id: 4,
        },
      ],
      comments: [
        {
          stars: 5,
          text: "My experience with WOODIES is a complete success, from customed furniture, range of product, modern design, purchasing experience, the delivery and newsletter. Litterally everything is great. Thank you!",
          avatar: require("./assets/images/sandra-avatar.png"),
          name: "Sandra Dewi",
          city: "Jakarta Selatan",
        },
        {
          stars: 4,
          text: "My experience with WOODIES is a complete success, from customed furniture, range of product, modern design, purchaewsletter. Litterally everything is great. Thank you!",
          avatar: require("./assets/images/sandra-avatar.png"),
          name: "Jane Smith",
          city: "Jersey City",
        },
        {
          stars: 5,
          text: "My experience with WOODIES is a duct, modern design, purchasing experience, the delivery and newsletter. Litterally everything is great. Thank you!",
          avatar: require("./assets/images/sandra-avatar.png"),
          name: "Alex Williams",
          city: "Los Angeles",
        },
        {
          stars: 4,
          text: "My experience withd furniture, range of product, modern design, purchasing experience, the delivery and newsletter. Litterally everything is great. Thank you!",
          avatar: require("./assets/images/sandra-avatar.png"),
          name: "Jim Davis",
          city: "New York",
        },
      ],
      currentComment: 2,
    };
  }
  changeBurger = () => {
    this.setState((prev) => ({
      burgerActive: !prev.burgerActive,
    }));
  };
  changeCurrentComment = (obj) => {
    let count = this.state.currentComment + (obj.type === "add" ? 1 : -1);
    if (obj.type === "set") count = obj.value;
    this.setState({
      currentComment: count,
    });
  };
  render() {
    return (
      <>
        <Header
          burgerActive={this.state.burgerActive}
          changeBurger={this.changeBurger}
        />
        <main>
          <Presentation />
          <WeAre />
          <Custom />
          <WeHave supplies={this.state.supplies} />
          <Comments
            comments={this.state.comments}
            currentComment={this.state.currentComment}
            changeCurrentComment={this.changeCurrentComment}
          />
          <Subscribe />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
