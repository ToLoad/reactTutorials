import React, { Component } from "react";

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc,
    }
    this.inputForHandler = this.inputForHandler.bind(this);
  }
  inputForHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    console.log(this.props.data);
    return (
      <article>
        <h2>Update</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
            this.props.onSumit(this.state.id, this.state.title, this.state.desc);
          }.bind(this)}
        >
          <input type="hidden" name="id" value={this.state.id}></input>
          <p>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={this.state.title}
              onChange={this.inputForHandler}
            ></input>
          </p>
          <p>
            <textarea
              onChange={this.inputForHandler}
              name="desc"
              placeholder="description"
              value={this.state.desc}
            ></textarea>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;
