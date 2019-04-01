import axios from 'axios';

export default class EkEventService {
  constructor(network) {
    this.network = network;
  }

  getTableUrl() {
    const url = `${this.network.protocol}://
                 ${this.network.host}: 
                 ${this.network.port}/v1/chain/get_table_rows`;
    return url;    
  }

  async readTable(code, table) {
    return await axios.post(this.getTableUrl(), {
        code: code,
        table: table
      }
    );
  }
}