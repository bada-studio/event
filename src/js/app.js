import React, { Component } from "react";
import "../css/app.css";
import ScatterBridge from "./scatterBridge";

class App extends Component {
  constructor(props) {
    super(props);

    this.network = {
      blockchain: "eos",
      protocol: "https",
      host: "api.eoseoul.io",
      port: 443,
      chainId: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"
    };

    this.scatter = new ScatterBridge(this.network, "EOS Knight Event");
    this.onClick = this.onClick.bind(this);
  }

  async onClick() {
    const scatter = this.scatter;
    await scatter.connect();
    await scatter.login();
    await scatter.loadContract("eosknightsio");
    await scatter.contract.signup("raindaysmain");
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
