import React, { Component } from "react";
import { PostContainer } from "./Containers";
import ScatterBridge from "./Utils/ScatterBridge";
import Config from "./Config";
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.scatter = new ScatterBridge(Config.network, "EK Event");
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
        <PostContainer/>
        <Alert stack={{limit: 3}} />
      </div>
    );
  }
}

export default App;
