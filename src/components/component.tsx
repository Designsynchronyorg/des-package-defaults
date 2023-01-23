import React from "react";

class Component extends React.Component {
  state: { someKey: string };
  constructor(props) {
    super(props);
    this.state = {
      someKey: "someValue",
    };
  }

  render() {
    return <p>{this.state.someKey}</p>;
  }

  componentDidMount() {
    this.setState({
      someKey: "otherValue",
    });
  }
  setState(arg0: { someKey: string }) {
    throw new Error("Method not implemented.");
  }
}

export default Component;
