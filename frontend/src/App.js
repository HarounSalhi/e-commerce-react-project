import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navbar';
import Footer from './components/footer';
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import history from './history';

import login from './components/login';
import register from './components/register';
import contact from './components/contact';
import productDisplay from './components/productDisplay';
import categorie from './components/categorie';
import Nomatchapage from './components/Nomatchapage';

Constructor(props){
  super(props);
  this.state={isLoggedIn=false};
}

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <NavBar/>
        <Switch>
          <Route path="/" exact render={(props)=><login {...props} updateLoggedIn={this.updateLoggedIn}/>} activeClassName="active"/>
          <Route path="/register" exact component={register} activeClassName="active"/>
          <Route path="/contact" exact component={contact} activeClassName="active"/>
          <Route path="/productDisplay" exact component={productDisplay} activeClassName="active"/>
          <Route path="/categorie" exact component={categorie} activeClassName="active"/>
          <Route path="*"  component={Nomatchapage} activeClassName="active"/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

updateLoggedIn=(status)=>{
  this.setState({isLoggedIn:status});
}

export default App;
