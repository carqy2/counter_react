import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>Please create a tag.</p>;
  //     return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
  //   }

  componentDidUpdate(p) {
    console.log("prevProps", p);
    console.log("currentProps", this.props);
  }

  render() {
    return (
      <div>
        {/* <h4>{this.props.id}</h4> */}
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <ul> */}
        {/* first one is boolean, the second one is true by default in js */}
        {/* {this.state.tags.length === 0 && "No tags"}
          {this.renderTags()} */}
        {/* </ul> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
