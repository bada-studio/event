import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs2';
import {JsonRpc, Api} from 'eosjs';

export default class ScatterBridge {

  constructor(network, appName) {
    this.appName = appName;
    ScatterJS.plugins(new ScatterEOS());

    this.network = ScatterJS.Network.fromJson(network);
    this.rpc = new JsonRpc(network.fullhost());

    this.eosApi = null;
    this.account = null;
    this.isConnected = false;
  }

  async connect() {
    await ScatterJS.connect(this.appName, this.network).then(connected => {
      console.log("connected:" + connected);
      this.isConnected = connected;
      if (connected) {
        this.eosApi = ScatterJS.eos(this.network, Api, {rpc, beta3:true});
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

  makeAction(contract, actionName, data, perm = this.account.authority) {
    return {
      account: contract,
      name: actionName,
      authorization: [{
        actor: this.account.name,
        permission: perm// this.currentAccount.authority
      }],
      data: data
    };
  }
}