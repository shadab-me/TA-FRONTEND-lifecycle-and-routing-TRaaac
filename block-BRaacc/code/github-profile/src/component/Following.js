import React from "react";
class Following extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.match.params.username,
      following: null,
    };
  }
  componentDidMount() {
    let url = `https://api.github.com/users/${this.state.username}/following`;
    fetch(url)
      .then((data) => data.json())
      .then((profiles) => {
        this.setState({
          following: profiles,
        });
      });
  }

  render() {
    const { following } = this.state ? this.state : "loading";
    if (!following) return "Loading";
    return (
      <div className="following container">
        <ul className="list-group">
          {following.map((following) => {
            return (
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <a href={`users/${following.login}`}>{following.login}</a>
                <img src={following.avatar_url} className="img-thumbnail" />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Following;
