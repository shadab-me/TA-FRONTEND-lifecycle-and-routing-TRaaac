import React from "react";

class Battle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h2 className="text-center text-primary mt-5">Instructions</h2>
        <div className="row">
          <div className="col-md-4 p-5">
            <img src="/img/person.jpg" className="w-100"></img>
          </div>
          <div className="col-md-4 p-5">
            <img src="/img/airplane.png" className="w-100"></img>
          </div>
          <div className="col-md-4 p-5">
            <img src="/img/reward1.jpg" className="w-100"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Battle;
