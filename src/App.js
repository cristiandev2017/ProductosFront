import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Guardar  from "./pages/Guardar";


function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/guardar" component={Guardar}/>
      </Switch>
    </Router>
  );
}


export default App;
