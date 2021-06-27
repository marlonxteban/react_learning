import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';
import PageNotFound from './components/PageNotFound';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/posts/:post_id" component={Post}/>
      <Route component={PageNotFound} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
