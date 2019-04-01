import React, { Component } from "react";
import { Header, PostWrapper } from "./Components";
import { PostContainer } from "./Containers";
import ScatterBridge from "./Utils/ScatterBridge";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        network: {
          blockchain:'eos',
          chainId:'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
          host: "api.eoseoul.io",
          port:443,
          protocol:'https'
        }
    };

    this.scatter = new ScatterBridge(this.state.network, "EK Event");
    this.onClick = this.onClick.bind(this);
  }

  async onClick() {
    const scatter = this.scatter;
    await scatter.connect();
    await scatter.loadContract("eosknightsio");
    await scatter.contract.signup(scatter.account.name, scatter.auth);
  }

  render() {
    return (
      <div>
        <Header/>
        <PostContainer/>
      </div>
    );
  }
}

export default App;
