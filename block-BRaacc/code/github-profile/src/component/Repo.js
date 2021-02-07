import React from "react";
class Repo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.match.params.username,
      repos: null,
    };
  }
  componentDidMount() {
    let url = `https://api.github.com/users/${this.state.username}/repos`;
    fetch(url)
      .then((data) => data.json())
      .then((profiles) => {
        this.setState({
          repos: profiles,
        });
      });
  }

  render() {
    const { repos } = this.state ? this.state : "loading";
    if (!repos) return "Loading";
    return (
      <div className="repos container">
        <ul className="list-group">
          {repos.map((repo) => {
            return (
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <a target="_blank" href={repo.html_url}>
                  {repo.full_name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Repo;
