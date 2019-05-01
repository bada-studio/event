import React, { Component } from "react";
import { Header, Footer } from "./Components";
import { HeadingBox, ShopItemList } from "./Containers";
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

    this.onClick = this.onClick.bind(this);
  }

  async onClick() {
  }

  render() {
    return (
      <div>
        <Header/>
        <HeadingBox/>
        <ShopItemList/>
        <Footer/>
        <Alert stack={{limit: 3}} />
      </div>
    );
  }
}

export default App;
