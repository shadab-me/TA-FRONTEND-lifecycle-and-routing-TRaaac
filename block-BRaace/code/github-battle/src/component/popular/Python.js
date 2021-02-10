import React from "react";
import Card from "./Card";
class Python extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: null,
    };
  }
  componentDidMount() {
    fetch(
      "https://api.github.com/search/repositories?q=stars:%3E1+language:Python&sort=stars&order=desc&type=Repositories"
    )
      .then((data) => data.json())
      .then((repos) => {
        this.setState({
          repos: repos.items,
        });
      });
  }

  render() {
    const repos = this.state.repos;
    if (!repos) return <div className="container">loading...</div>;
    return (
      <div className="all-top-repos container d-flex flex-wrap justify-content-between mt-5">
        {repos.splice(0, 20).map((repo, index) => (
          <Card repo={repo} index={index} key={index} />
        ))}
      </div>
    );
  }
}

export default Python;