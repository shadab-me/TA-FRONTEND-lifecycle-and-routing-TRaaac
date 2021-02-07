import React from "react";

class JavaScript extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: null,
    };
  }
  componentDidMount() {
    fetch(
      "https://api.github.com/search/repositories?q=stars:%3E1+language:JavaScript&sort=stars&order=desc&type=Repositories"
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
    if (!repos) return "loading";
    return (
      <div className="all-top-repos container d-flex flex-wrap justify-content-between mt-5">
        {repos.splice(0, 20).map((repo, index) => (
          <Card repo={repo} index={index} key={index} />
        ))}
      </div>
    );
  }
}
function Card(props) {
  const { repo, index } = props;
  console.log(repo);
  return (
    <div className="card mt-2 p-3" style={{ width: "18rem" }}>
      <h3 className="card-subtitle text-bold text-center mt-2 mb-2">
        #{index + 1}
      </h3>
      <img
        className="card-img-top"
        src={repo.owner.avatar_url}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{repo.name}</h5>
        <p className="card-text">{repo.description}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default JavaScript;
