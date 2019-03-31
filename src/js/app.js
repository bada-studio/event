import React, { Component } from "react";
import "../css/app.css";
import ScatterBridge from "./scatterBridge";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scatterBridge: null,
      network: {
        blockchain: "eos",
        protocol: "https",
        host: "api.eoseoul.io",
        port: 443,
        chainId: "b7fc36d8e5891d9fea7d49df06221b3ac89c793f14e7dacd16a332ce8094d049"
      }
    };

    this.onClick = this.onClick.bind(this);
  }

  componentWillMount() {
    this.setState({
      scatterBridge: new ScatterBridge(this.state.network, "EOS Knight Event")
    });
  }

  async componentDidMount() {
    await this.state.scatterBridge.connect();
    await this.state.scatterBridge.getIdentity();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.onClick}>Test</button>
        </header>
      </div>
    );
  }
}

export default App;
