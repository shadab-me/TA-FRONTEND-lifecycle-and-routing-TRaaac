import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person: null,
      active: null,
      value: null,
    };
  }
  randomPerson = () => {
    fetch("https://randomuser.me/api/")
      .then((persons) => persons.json())
      .then((data) => this.setState({ person: data.results[0] }));
  };

  changeContent = ({ target }) => {
    console.log(target);
    switch (target.dataset.field) {
      case "name":
        let name = this.state.person.name.first;
        this.setState({
          value: name,
          active: target.dataset.field,
        });
        break;
      case "email":
        let email = this.state.person.email;
        this.setState({
          value: email,
          active: target.dataset.field,
        });
        break;
      case "dob":
        let dob = this.state.person.dob.age;
        this.setState({
          value: dob,
          active: target.dataset.field,
        });
        break;
      case "location":
        let location = this.state.person.location.street.name;
        this.setState({
          value: location,
          active: target.dataset.field,
        });
        break;
      case "phone":
        let phone = this.state.person.phone;
        this.setState({
          value: phone,
          active: target.dataset.field,
        });
        break;
      case "lock":
        let lock = this.state.person.login.password;
        this.setState({
          value: lock,
          active: target.dataset.field,
        });
        break;
      default:
        break;
    }
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then((persons) => persons.json())
      .then((data) => this.setState({ person: data.results[0] }));
  }

  render() {
    if (!this.state.person) return "loading";
    return (
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-2"></div>
          <div className="col-md-8">
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
                  <p className="text-light">My {this.state.active || "Name"}</p>

                  <h1>{this.state.value || this.state.person.name.first}</h1>
                </div>
              </div>

              <div className="btns">
                <i
                  onClick={this.changeContent}
                  data-field="name"
                  class="fas fa-user-alt"
                ></i>
                <i
                  onClick={this.changeContent}
                  data-field="email"
                  class="fas fa-envelope-open"
                ></i>
                <i
                  onClick={this.changeContent}
                  data-field="dob"
                  class="fas fa-calendar-times"
                ></i>
                <i
                  onClick={this.changeContent}
                  data-field="location"
                  class="fas fa-map"
                ></i>
                <i
                  onClick={this.changeContent}
                  data-field="phone"
                  class="fas fa-phone"
                ></i>
                <i
                  onClick={this.changeContent}
                  data-field="lock"
                  class="fas fa-lock"
                ></i>
              </div>
              <button className="btn btn-primary" onClick={this.randomPerson}>
                {this.state.person ? "Random Person" : "loading..."}
              </button>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    );
  }
}

export default App;
