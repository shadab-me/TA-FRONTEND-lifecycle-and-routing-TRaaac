import Header from "./component/common/Header";
import All from "./component/popular/All";
import JavaScript from "./component/popular/JavaScript";
import Python from "./component/popular/Python";
import Battle from "./component/battle/Battle";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <a href="/" className="btn btn-light pr-4 pl-4 mb-4">
          Repos
        </a>
        <a href="/battle" className="btn btn-light ml-3 pr-4 pl-4 mb-4">
          Battle
        </a>
        <Switch>
          <Route path="/battle" component={Battle} exact>
            <Route path="/battle" component={Battle}></Route>
          </Route>
          <Route path="/">
            <Header />
            <Route path="/" component={All}></Route>
            <Route path="/javascript" component={JavaScript} />
            <Route path="/python" component={Python} exact />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
