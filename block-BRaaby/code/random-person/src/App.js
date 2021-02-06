import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person: null,
    };
  }
  randomPerson = () => {
    fetch("https://randomuser.me/api/")
      .then((persons) => persons.json())
      .then((data) => this.setState({ person: data.results[0] }));
  };

  displayDetail = (event) => {
    console.log(event.target.value);
    //const { value } = target;
    /*switch (value) {
      case "phone":
        console.log(value);
        break;
    }
    */
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then((persons) => persons.json())
      .then((data) => this.setState({ person: data.results[0] }));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="card hovercard">
              <div className="cardheader"></div>
              <div className="avatar">
                <img
                  alt=""
                  src={this.state.person ? this.state.person.picture.large : ""}
                />
              </div>
              <div className="info">
                <div className="title">
                  <h1>
                    {this.state.person ? this.state.person.name.first : ""}
                  </h1>
                  <p>My Name</p>
                </div>
              </div>
              <div className="bottom">
                <a
                  className="btn btn-primary btn-twitter btn-sm"
                  value="user"
                  onClick={this.displayDetail}
                >
                  <i className="fa fas-user"></i>
                </a>
                <a
                  className="btn btn-danger btn-sm"
                  rel="publisher"
                  value="phone"
                  onClick={this.displayDetail}
                >
                  <i className="fa fas-envelope-square" value="phone"></i>
                </a>
                <a
                  className="btn btn-primary btn-sm"
                  rel="publisher"
                  value="phone"
                >
                  <i className="fa fas-phone"></i>
                </a>
                <a className="btn btn-warning btn-sm">
                  <i className="fa fas-phone"></i>
                </a>
              </div>
              <button className="btn btn-primary" onClick={this.randomPerson}>
                {this.state.person ? "Random Person" : "loading..."}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
