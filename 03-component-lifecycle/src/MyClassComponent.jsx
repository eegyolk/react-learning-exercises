import { Component } from "react";

class MyClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("MyClassComponent Constructor: Component is initialized.");
  }

  componentDidMount() {
    console.log("MyClassComponent componentDidMount: Component is mounted to the DOM.");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("MyClassComponent componentDidUpdate: Component re-rendered due to state/prop change.", prevState.count);
  }

  componentWillUnmount() {
    console.log("MyClassComponent componentWillUnmount: Component is being removed.");
  }

  render() {
    return (
      <div className="card">
        <h1>Class Component</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default MyClassComponent;
