import { PureComponent } from "react";
import Home from "./components/Home";

class App extends PureComponent {
  state = {
    name: "sakib",
    age: 23,
    counter: 0,
  };

  handler = () => {
    // console.log("hel");
    this.setState((pre) => {
      return { ...pre, name: "tamim", age: 32 };
    });
  };
  render() {
    return (
      <>
        <Home info={this.state} />
        <button onClick={this.handler}>click me</button>
        <button
          onClick={() => {
            this.setState((pre) => {
              return { ...pre, counter: pre.counter + 1 };
            });
          }}
        >
          counter {this.state.counter}
        </button>
      </>
    );
  }
}

export default App;
