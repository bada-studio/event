import axios from 'axios';
import Config from '../Config';

export default class ChainService {
  getTableUrl() {
    const { protocol, host, port } = Config.network;
    return `${protocol}://${host}:${port}/v1/chain/get_table_rows`;
  }

  async readTable(code, table) {
    const url = this.getTableUrl();
    const data = {
      scope: code,
      code: code,
      table: table,
      json: true
    };

    return await axios.post(url, data, {
      headers: { 
        'content-type': 'text/plain'
      }
    });
  }

  async readTableRow(code, table, from, keyType = "name") {
    const url = this.getTableUrl();
    const data = {
      scope: code,
      code: code,
      table: table,
      lower_bound: from,
      upper_bound: null,
      key_type: keyType,
      index_position: 1,
      limit: 1,
      json: true
    };

    const res = await axios.post(url, data, {
      headers: { 
        'content-type': 'text/plain'
      }
    });

    if (res.data === null || res.data.rows === null || res.data.rows.length === 0) {
      return null;
    }

    return res.data.rows[0];
  }
}