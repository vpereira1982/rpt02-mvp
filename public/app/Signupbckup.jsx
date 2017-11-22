import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import App from './index.jsx';
import Cropper from 'react-cropper';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: '../images/default-profile.jpg',
      cropResult: null
    }
  }

  onFileSelected() {
    let preview = document.querySelector('.imgProfile');
    let file    = document.querySelector('.imgUploadInput').files[0]; //
    let reader  = new FileReader();

    reader.addEventListener("load", () => {
      preview.src = reader.result;
      this.setState({image: reader.result})
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }

cropImage() {
  console.log('this is the this.cropper.getCroppedCanvas().toDataUrl()', this.cropper.getCroppedCanvas().toDataURL())
  if (typeof this.cropper.getCroppedCanvas() === 'undefined') {
    return;
  }
  this.setState({
    cropResult: this.cropper.getCroppedCanvas().toDataURL(),
  });
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
            <label htmlFor="file">Upload Music</label>
            <input type="file" className="form-control form-control-lg" id="file" required name="file" accept="application/x-zip-compressed,audio/*" />
            <br />
            <div className="form-group">
              <select className="custom-select btn btn-success dropdown-toggle" id="inlineFormCustomSelect" required name="genre">
                <option defaultValue>Favorite Genre</option>
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

            <Cropper
              className="default-profile imgProfile"
              src={this.state.image}
              style={{height: 400, width: '100%'}}
              // Cropper.js options
              guides={false}
              ref={cropper => { this.cropper = cropper; }} />

            <button type='button' onClick={this.cropImage.bind(this)} style={{ float: 'right' }}>
              Crop Image
            </button>



            <label htmlFor="image" className="btn btn-info">Upload Profile Picture</label>

            <input style={{"visibility":"hidden"}} type="file" onChange={this.onFileSelected.bind(this)} className="imgUploadInput form-control form-control-lg" required
              id="image" name="img" accept="image/x-png,image/gif,image/jpeg" />
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    )
  }
}


export default Signup;
