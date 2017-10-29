import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import App from './index.jsx';
import Search from './search.jsx';
import Results from './results.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggeduser: props.location.state.username,
      users: []
    };
    window.query = '';
  }

  componentDidMount() {
    var data = window.query === '' ? {} : window.query;
    APIcall.fetch(data,'/api/all', function(data) {
      this.setState({
        users: JSON.parse(data)
      });
    }.bind(this));
  }

  handleSearch(query) {
    window.query = {'query': query};
    setTimeout(
      this.componentDidMount.bind(this), 500
    );
  }

  render () {
    return (
      <div>
        <div className="search col-offset-4 col-6">
          <Search username={this.state.loggeduser} handleSearch={this.handleSearch.bind(this)} />
        </div>
        <div className="container result">
          <Results users={this.state.users} test={[1,2,3,4,5]}/>
        </div>
      </div>
    )
  }
}


export default Main;
