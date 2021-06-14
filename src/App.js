import Home from "./Home";
import Reviews from "./Reviews";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from "./Footer";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/reviews"><Reviews /></Route>
            <Route exact path="/"><Home /></Route>
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
