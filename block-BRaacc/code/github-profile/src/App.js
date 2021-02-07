import Profile from "./component/Profile";
import React from "react";
import Follower from "./component/Follower";
import Following from "./component/Following";
import Repo from "./component/Repo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: null,
      profile: null,
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
  componentDidMount() {
    let url = `https://api.github.com/users/shadab-me`;
    fetch(url)
      .then((data) => data.json())
      .then((profile) => {
        this.setState({
          profile: profile,
        });
      });
  }

  render() {
    const { profile } = this.state.profile ? this.state : "loading";
    return (
      <div className="profile">
        {this.state.profile ? <Profile profile={profile} /> : "loading"}
      </div>
    );
  }
}

export default App;
