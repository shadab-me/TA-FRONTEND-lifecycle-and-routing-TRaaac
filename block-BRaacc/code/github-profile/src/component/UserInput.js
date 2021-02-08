import React from "react";
import { Link } from "react-router-dom";
class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
    //this.handleInput = this.handleInput.bind(this);
  }

  handleInput = (event) => {
    let value = event.target.value;
    console.log(value);
    this.setState({
      username: value,
    });
  };

  render() {
    return (
      <section className="">
        <h3 className="text-dark text-center mt-4 mb-3">
          Enter GitHub Username
        </h3>
        <div className="d-flex justify-content-center">
          <input
            onChange={this.handleInput}
            className="p-1 br-2"
            type="text"
            id="user"
            value={this.state.username}
            placeholder="Enter Username"
          ></input>

          <Link to={`/users/${this.state.username}`}>
            <button
              className="btn btn-primary ml-3"
              type="submit"
              id="submit-btn"
            >
              Search
            </button>
          </Link>
        </div>
      </section>
    );
  }
}

export default UserInput;
