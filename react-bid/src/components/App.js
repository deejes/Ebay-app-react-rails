import React, { Component } from 'react';
import HomePage from './pages/HomePage'
import AuctionsIndexPage from './pages/AuctionsIndexPage'
import AuctionsNewPage from './pages/AuctionsNewPage'
import AuctionsShowPage from './pages/AuctionsShowPage'
import {
  BrowserRouter as Router, // When importing, use `as` to alias imported to something else
  Route,
  Link,
  Switch
} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import AuthRoute from './AuthRoute';
import SignInPage from './pages/SignInPage';


class App extends Component {
      constructor (props) {
      super(props);

      this.state = {
        isSignedIn: false
      };

      this.signOut = this.signOut.bind(this);
      this.signIn = this.signIn.bind(this);
    }

    componentWillMount () {
      console.log( 'did mount');
      this.setState({isSignedIn: !!window.localStorage.getItem('jwt')});
    }

    signOut (event) {
      event.preventDefault();
      window.localStorage.removeItem('jwt');
      this.setState({isSignedIn: false});
    }

    signIn () {
      this.setState({isSignedIn: true});
    }

    // a getter, use it as if its a property
    // (i.e. this.currentTarget)
    get currentUser () {
      const jwt = window.localStorage.getItem('jwt');
      return jwt && jwtDecode(jwt);
    }
  render() {
    console.log(this.state.isSignedIn);
    const {currentUser} = this;
    const {isSignedIn} = this.state;

    return (
    <Router>
      <div className="App">
        <nav>
    <Link to='/'>Home</Link>
    <Link to='/auctions'>Auctions</Link>
    <Link to='/auctions/new'>New Auction</Link>
    {
      isSignedIn
      ? ([
        <span key={0}>
          Hello, {currentUser.firstName} {currentUser.lastName}!
        </span>,
        <a key={1} href onClick={this.signOut}>
          Sign out
        </a>
      ]) : (
        <Link to='/sign_in'>Sign In</Link>
      )
    }
  </nav>
        <div className="App-header">
          <h2>Welcome to Biddr!</h2>
        </div>
        <Switch>
          <Route exact path='/' component={HomePage} />
        <Route
          exact
          path='/sign_in'
          render={props => <SignInPage {...props} onSignIn={this.signIn} />} />
        <AuthRoute
          exact
          isAuthenticated={isSignedIn}
          path='/auctions'
          component={AuctionsIndexPage} />
        <AuthRoute
          exact
          isAuthenticated={isSignedIn}
          path='/auctions/new'
          component={AuctionsNewPage} />
          <AuthRoute
            isAuthenticated={isSignedIn}
            path='/auctions/:id'
            component={AuctionsShowPage} />
          </Switch>
      </div>
    </Router>
    )
  }
}

export default App;
