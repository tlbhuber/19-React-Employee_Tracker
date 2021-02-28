import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "../src/pages/Search"


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
      <Route exact path="/" component={Search} />
      </div>
    </Router>
  );
}

export default App;