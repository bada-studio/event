import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs';
import Eos from 'eosjs';

export default class ScatterBridge {

  constructor(network, appName) {
    this.appName = appName;
    ScatterJS.plugins(new ScatterEOS());

    this.account = null;
    this.eosOptions = { expireInSeconds:60 };
    this.isConnected = false;
    this.contract = null;

    this.eosApi = null;
    this.network = ScatterJS.Network.fromJson(network);
  }

  async connect() {
    const net = this.network;
    await ScatterJS.connect(this.appName, {net}).then(connected => {
      console.log("connected:" + connected);
      this.isConnected = connected;
      if (connected) {
        this.eosApi = ScatterJS.eos(this.network, Eos);
        console.log("create eos Api");
      }
    });
  }

  async login() {
    if (this.isConnected) {
      await ScatterJS.login().then(id => {
        this.account = ScatterJS.account('eos');
        console.log(this.account);
      });
    } else {
      console.log("check connection first!");
    }
  }

  async loadContract(name) {
    this.contract = await this.eosApi.contract(name);
  }

  async logout() {
    await ScatterJS.logout().then(() => {
      console.log("logout done!");
      this.account = null;
    });
  }

  async sendTx(actions) {
    if(actions.length) {
      await this.eosApi.transact({
        actions: actions
      }, {blocksBehind: 3, expireSeconds: 30 });
    }
  }

  makeAction(contract, actionName, data) {
    return {
      account: contract,
      name: actionName,
      authorization: [{
        actor: this.account.name,
        permission: this.account.authority
      }],
      data: data
    };
  }
}