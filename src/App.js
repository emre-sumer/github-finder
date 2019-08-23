import React from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from "./components/layout/Navbar";
import User from "./components/users/User";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import "./App.css";


import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => { 

  // const [ users, setUsers] =useState([])
  // const [ user, setUser] =useState({})
   //const [ repos, setRepos] =useState([])
   //const [ loading, setLoading] =useState(false)



 /* async componentDidMount() {
    
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIEND_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIEND_SECRET}`);
    this.setState({ users: res.data, loading: false });
    
  }*/

  //Search Github Users
  /* const searchUsers = async text =>{
    setLoading(true);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIEND_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIEND_SECRET}`);
    setUsers(res.data.items);
    setLoading(false);

  }*/









    return (
      <GithubState>
        <AlertState>

    
      <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert />
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/about" component={About} />
            <Route exact path="/user/:login" component={User} />
            <Route  component={NotFound} />

            
          </Switch>

        </div>
      </div>

      </Router>
      </AlertState>
      </GithubState>

    );

}

export default App;
