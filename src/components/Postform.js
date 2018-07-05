import React, { Component } from 'react'

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e);
  }
onSubmite(){

}


  render() {
    return (
      <div>
        <h3>Add Post </h3>
        <form onSubmit= {this.onSubmit}>
          <div>
            <label>Title:</label>
            <input type="text" name="title" value={this.state.title} onChange={this.onChange} />
          </div>
          <br />
          <div>
            <label>Body:</label>
            <textarea name="body" value={this.state.body} onChange={this.onChange} />
          </div>
          <br />
          <button type="submit">Submit</button>


        </form>
      </div>
    )
  }
}
export default Postform;