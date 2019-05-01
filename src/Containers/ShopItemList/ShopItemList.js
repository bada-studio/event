import React, {Component} from 'react';
import { PostWrapper, ShopItem } from '../../Components';

class ShopItemList extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <PostWrapper>
        <ShopItem/>
      </PostWrapper>
    );
  }
}

export default ShopItemList;
