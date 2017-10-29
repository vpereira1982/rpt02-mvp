import React from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';
import App from './index.jsx';


class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-4 col-md-offset-4 bg-primary signup">
        <h2> Sign Up </h2> <br />
        <form method="POST" encType="multipart/form-data" action="/api" id="postform" autoComplete="off">
          <div className="form-group">
            <input autoComplete="off" type="text" className="form-control form-control-lg" id="firstname" placeholder="First Name" required name="firstname"/>
          </div>
          <div className="form-group">
            <input autoComplete="off" type="text" className="form-control form-control-lg" id="lastname" placeholder="Last Name" required name="lastname"/>
          </div>
          <div className="form-group">
            <input autoComplete="off" type="password" className="form-control form-control-lg" id="password" placeholder="Password" required name="pw"/>
          </div>
          <div className="form-group">
            <input autoComplete="off" type="text" className="form-control form-control-lg" id="email" placeholder="Email" required name="email"/>
          </div>
          <div className="form-group">
              <select className="custom-select mb-2 mr-sm-2 mb-sm-0 btn btn-success dropdown-toggle" id="inlineFormCustomSelect" required name="genre">
                <option selected>Favorite Genre</option>
                <option value="Blues">Blues</option>
                <option value="Classical">Classical</option>
                <option value="Country">Country</option>
                <option value="Electronic">Electronic</option>
                <option value="Rock">Rock</option>
                <option value="Grunge">Grunge</option>
                <option value="Pop">Pop</option>
                <option value="Metal">Metal</option>
                <option value="Jazz">Jazz</option>
              </select>
          </div>



          <div className="form-group">
            <input type="file" className="form-control form-control-lg" id="file" placeholder="Upload File" required name="file" accept="application/x-zip-compressed,audio/*"/>
          </div>
          <br />
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    )
  }
}


export default Signup;
