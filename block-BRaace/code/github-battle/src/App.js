import Header from "./component/Header";
import All from "./component/All";
import JavaScript from "./component/JavaScript";
import Python from "./component/Python";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
      </div>
      <Route path="/" component={All} exact></Route>
      <Route path="/javascript" component={JavaScript} />
      <Route path="/python" component={Python} exact />
    </BrowserRouter>
  );
}

export default App;
