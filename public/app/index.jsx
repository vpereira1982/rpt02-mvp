import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Signup from './Signup.jsx';
import Main from './Main.jsx';
import Login from './Login.jsx';

import { BrowserRouter, Route } from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory();

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
/*    APIcall.fetch(this.state,'/api/cookieTest', function(data) {
      if (data) {
        console.log('Sucess', data);
      } else {
        alert('Fail');
      }
    });*/
  }

  render () {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" history={customHistory} component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/main" history={customHistory} component={Main} />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('app'));
/*
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" history={customHistory} component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/main" history={customHistory} component={Main} />
    </div>
  </BrowserRouter>
  , document.getElementById('app'));*/