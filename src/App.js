import React, { Component } from "react";
import Dog from "./components/Dog";
import Navbar from "./components/Navbar";
import "./App.css";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.option = "hound";
    this.api_url = `https://dog.ceo/api/breed/${this.option}/images`;
    this.state = {
      dogs: []
    };
    this.getValue = this.getValue.bind(this);
    this.getData = this.getData.bind(this);
  }

  getData() {
    axios.get(this.api_url).then(res => {
      let dogs = res.data.message;
      this.setState({ dogs });
    });
  }

  getValue(event) {
    if (event.key === "Enter") {
      this.option = event.target.value.toLowerCase();
      this.api_url = `https://dog.ceo/api/breed/${this.option}/images`;
      this.getData();
    } else {
      return true;
    }
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <Navbar getValue={this.getValue} />
        <div className="flexIt">
          {this.state.dogs.slice(0, 10).map(dog => (
            <Dog
              key={dog}
              image={dog}
              nameDog={this.option.toUpperCase()}
              LinkDog={dog}
            />
          ))}
        </div>
      </div>
    );
  }
}
