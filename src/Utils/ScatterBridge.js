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
    this.net = ScatterJS.Network.fromJson(network);
    this.auth = null;
  }

  async connect() {
    const network = this.net;
    this.isConnected = await ScatterJS.connect(this.appName, {network});
    if (!this.isConnected) {
      return console.error('connection failed');
    }

    this.eosApi = ScatterJS.eos(this.net, Eos);
    await ScatterJS.login().then(id => {
        if(!id) return console.error('no identity');
        this.account = ScatterJS.account('eos');
        this.auth = {authorization:[`${this.account.name}@${this.account.authority}`]};
    });
  }

  async loadContract(name) {
    this.contract = await this.eosApi.contract(name);
  }
}