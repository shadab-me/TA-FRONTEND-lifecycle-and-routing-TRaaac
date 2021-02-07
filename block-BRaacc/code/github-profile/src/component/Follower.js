import React from "react";
class Follower extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.match.params.username,
      followers: null,
    };
  }
  componentDidMount() {
    let url = `https://api.github.com/users/${this.state.usernmae}/followers`;
    fetch(url)
      .then((data) => data.json())
      .then((profiles) => {
        this.setState({
          followers: profiles,
        });
      });
  }

  render() {
    const { followers } = this.state ? this.state : "loading";
    if (!followers) return "Loading";
    return (
      <div className="followers container">
        <ul className="list-group">
          {followers.map((follower) => {
            return (
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <a href={`/users/${follower.login}`}> {follower.login} </a>
                <img src={follower.avatar_url} className="img-thumbnail" />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Follower;
