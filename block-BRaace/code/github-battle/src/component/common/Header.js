import React from "react";
class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                All
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/python">
                Python
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/javascript">
                JavaScript
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Header;
