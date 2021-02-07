import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.match.params.username,
      profile: null,
    };
  }
  componentDidMount() {
    fetch(`https://api.github.com/users/${this.state.username}`)
      .then((data) => data.json())
      .then((user) =>
        this.setState({
          profile: user,
        })
      );
  }
  render() {
    const { profile } = this.state;
    const { username } = this.props.match.params;
    console.log(profile);
    if (!profile) return <p>Loading..</p>;
    return (
      <div className="container">
        <div className="card flex justify-content-center">
          <div className="img-section">
            <img
              className="card-img-top rounded-circle responsive w-25"
              src={profile.avatar_url}
              alt="Card image cap"
            />
          </div>
          <div className="card-body">
            <a
              href={`/users/${username}/repos`}
              className="card-link btn btn-primary"
            >
              Public Repositories
            </a>
            <a
              href={`/users/${username}/followers`}
              className="card-link btn btn-primary"
            >
              Followers
            </a>
            <a
              href={`/users/${username}/following`}
              className="card-link btn btn-primary"
            >
              Following
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
