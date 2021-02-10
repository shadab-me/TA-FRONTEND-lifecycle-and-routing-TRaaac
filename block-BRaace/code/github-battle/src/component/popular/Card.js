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
      </div>
    </div>
  );
}
export default Card;
