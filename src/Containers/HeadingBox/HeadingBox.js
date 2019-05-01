import React, {Component} from 'react';
import { PostWrapper, AccountBox, GameInfoBox } from '../../Components';

class HeadingBox extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <PostWrapper>
        <AccountBox/>
        <GameInfoBox/>
      </PostWrapper>
    );
  }
}

export default HeadingBox;
