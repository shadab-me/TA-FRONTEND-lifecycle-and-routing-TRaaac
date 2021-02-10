import React from "react";
import Winner from "./Winner";

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBattleStart: false,
      playerOne: null,
      playerTwo: null,
    };
  }

  getUserInfo = (username) => {
    let url = `https://api.github.com/users/${username}`;

    let data = fetch(url)
      .then((data) => data.json())
      .then((user) => {
        return user;
      })
      .catch((err) => err);
    return data;
  };
  gameStart = () => {
    this.setState({
      isBattleStart: !this.state.isBattleStart,
    });
  };

  changeHandler = (event) => {
    if (event.charCode == 13) {
      // this.getUserInfo(event.target.value).then((user) => console.log(user));
      if (
        event.target.name == "playerOne" ||
        event.target.name == "playerTwo"
      ) {
        this.getUserInfo(event.target.value).then((user) => {
          console.log(user);
          this.setState({
            [event.target.name]: user,
          });
        });
      }
    }
  };

  removePlayer = (playerName) => {
    console.log(playerName);
    this.setState({
      [playerName]: null,
    });
  };

  render() {
    const { playerOne, playerTwo, isBattleStart } = this.state;
    return (
      <div className="container">
        <h2 className="text-center text-primary mt-5">Instructions</h2>
        <div className="row instruction">
          <div className="col-md-4 p-5">
            <h4 className="text-dark text-center">Enter two GitHub Profile</h4>
            <img src="/img/person.jpg" className="w-100"></img>
          </div>
          <div className="col-md-4 p-5">
            <h4 className="text-dark text-center">Battle</h4>

            <img src="/img/airplane.png" className="w-100"></img>
          </div>
          <div className="col-md-4 p-5">
            <h4 className="text-dark text-center">See The Winner</h4>

            <img src="/img/reward1.jpg" className="w-100"></img>
          </div>
        </div>
        {isBattleStart ? (
          <Winner playerOne={playerOne} playerTwo={playerTwo} />
        ) : (
          <div className="player row justify-content-between">
            {playerOne ? (
              <Card
                player={playerOne}
                playerName="playerOne"
                removePlayer={this.removePlayer}
              />
            ) : (
              <div className="player-one col-md-6">
                <h3>Enter Username</h3>
                <input
                  name="playerOne"
                  className="input p-1 w-75"
                  placeholder="GitHub UserName"
                  onKeyPress={(event) => this.changeHandler(event)}
                ></input>
                <button className="btn btn-primary mb-2 ml-2">Search</button>
              </div>
            )}
            {playerTwo ? (
              <Card
                player={playerTwo}
                removePlayer={this.removePlayer}
                playerName="playerTwo"
              />
            ) : (
              <div className="player-one col-md-6">
                <h3>Enter Username</h3>
                <input
                  name="playerTwo"
                  className="input p-1 w-75"
                  placeholder="GitHub UserName"
                  onKeyPress={(event) => this.changeHandler(event)}
                ></input>
                <button className="btn btn-primary mb-2 ml-2 lg">Seach</button>
              </div>
            )}
          </div>
        )}
        <div className="row mt-3">
          <div className="col-md-4"></div>
          <div className="col-md-4 mb-5 d-flex justify-content-center">
            {this.state.playerOne && this.state.playerTwo ? (
              <button
                onClick={this.gameStart}
                className="btn-lg btn-primary text-center justify-content-center pl-5 pr-5"
              >
                {this.state.isBattleStart ? "Reset" : "Battle"}
              </button>
            ) : null}
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

function Card(props) {
  const { avatar_url, login } = props.player;
  const { playerName } = props;
  const { removePlayer } = props;
  return (
    <div className="col-md-5 mr-1 bg-light p-3 text-right">
      <i
        className="fas fa-times cursor-pointer"
        onClick={() => removePlayer(playerName)}
      ></i>
      <div className="d-flex justify-content-center max-width-100 align-items-center">
        <img src={avatar_url} alt={login} className="w-25 rounded-circle"></img>
        <h5 className="ml-3">{login}</h5>
      </div>
    </div>
  );
}
export default Battle;
