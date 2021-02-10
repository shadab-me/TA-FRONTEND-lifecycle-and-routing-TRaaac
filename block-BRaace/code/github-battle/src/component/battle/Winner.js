function Winner(props) {
  const { playerOne, playerTwo } = props;
  let scorePlayerOne =
    playerOne.followers + playerOne.following + playerOne["public_repos"];
  let scorePlayerTwo =
    playerTwo.followers + playerTwo.following + playerTwo["public_repos"];

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card pb-3">
            <h4 className="text-center dark p-2">
              {scorePlayerOne > scorePlayerTwo ? "Winner" : "Losser"}
            </h4>
            <div className="card-img p-2">
              <img className="w-100" src={playerOne.avatar_url}></img>
            </div>
            <div className="card-body">
              <p>
                <i className=""></i>follower:{playerOne.followers}
              </p>
              <p>
                <i className=""></i>follower:{playerOne.following}
              </p>
              <p>
                <i className=""></i>repos:{playerOne["public_repos"]}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="card mb-3">
            <h4 className="text-center p-2">
              {scorePlayerOne < scorePlayerTwo ? "Winner" : "Losser"}
            </h4>
            <div className="card-img p-2">
              <img className="w-100" src={playerTwo.avatar_url}></img>
            </div>
            <div className="card-body">
              <p>
                <i className=""></i>follower:{playerTwo.followers}
              </p>
              <p>
                <i className=""></i>follower:{playerTwo.following}
              </p>
              <p>
                <i className=""></i>repos:{playerTwo["public_repos"]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Winner;
