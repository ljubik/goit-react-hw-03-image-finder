import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import fetchImage from "./services/pixabayApi";


class App extends Component {
  state = {
    name: "",
  };

  componentDidMount() {
    const { query, page } = this.state;

    fetchImage(query, page).then((result) => {

      this.setState({ gallery: [...result] });
    });
  }
  
  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (query !== prevState.query) {
      console.log(query);
      fetchImage(query, page).then((result) => {
        console.log(query);
        console.log(result);
        this.setState({ gallery: [...result] });
      });

    } else if (query === prevState.query && page !== prevState.page) {
      console.log(query);
      console.log(page);
      fetchImage(query, page).then((result) => {
        console.log(query);
        console.log(result);
        this.setState({ gallery: [...prevState.gallery, ...result] });
      });
    }
  }

  render() {
    const { gallery, page } = this.state;
    console.log(page);

    return (
      <div className="App">
        <h1>Search image</h1>
        
      </div>
    );
  }
}

export default App;
