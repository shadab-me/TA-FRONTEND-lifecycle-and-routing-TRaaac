import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: null,
    };
  }
  userInput = (event) => {
    if (event.charCode == 13) {
      this.setState({
        userInput: event.target.value,
      });
      event.target.value = "";
    }
  };

  render() {
    return (
      <div className="search-bar">
        <div className="input-group mb-3 w-25 text-center m-0 m-auto">
          <input
            onKeyPress={this.userInput}
            type="text"
            className="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>
      </div>
    );
  }
}
