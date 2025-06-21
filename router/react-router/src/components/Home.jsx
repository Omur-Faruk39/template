import React from "react";

class Home extends React.PureComponent {
  shouldComponentUpdate(nextPros) {
    if (
      (this.props.info.name === nextPros.info.name) &
      (this.props.info.age === nextPros.info.age)
    ) {
      return false;
    }
    return true;
  }
  render() {
    console.log("render");
    return (
      <>
        <h1>the name is {this.props.info.name}</h1>
        <h1>the age is {this.props.info.age}</h1>
      </>
    );
  }
}

export default Home;
