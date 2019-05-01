import React from 'react';
import { Button, Image, Icon } from 'semantic-ui-react';
import Config from '../../Config';
import './GameInfoBox.css';

const GameInfoBox = ({state, inputDisabled, gotThis, time, timeColor, imgUrl, onClickGet, onChangeName}) => (
  <div className="GameInfoBox">
    <div>
      <Image src="https://eosknights.io/img/icon1024.png" className='AppIcon' floated='left'/> 
      <h3>{Config.appName}</h3>
      <div class="Desc">
        {Config.appDesc}
      </div>
    </div>
    <div class="AppLinkBox">
      <Button.Group fluid basic>
        <Button>
          <Icon name='app store ios' /> iPhone
        </Button>
        <Button>
          <Icon name='play' /> Android
        </Button>
      </Button.Group>
    </div>
  </div>
);

export default GameInfoBox;