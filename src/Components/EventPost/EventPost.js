import React from 'react';
import { Input, Card, Label } from 'semantic-ui-react';
import Config from '../../Config';
import './EventPost.css';

const EventPost = ({state, inputDisabled, gotThis, time, timeColor, imgUrl, onClickGet, onChangeName}) => (
  <div className="EventPost">
    <div>
      <img className="SponsorIcon" src="https://eosknights.io/img/icon.png"/>
      <img className="CrossIcon" src="https://eosknights.io/img/cross.png"/>
      <img className="SponsorIcon" src="https://eosknights.io/img/bp/eosnation.png"/>
    </div>
    <div className="Sponsor">
      Make your EOS fun with {Config.sponsor}
    </div>

    <Card centered>
      <div className="ImgBox">
        <img src={imgUrl} className="ItemImage"/>
        <Label basic color={timeColor}>
          {time}
        </Label>        
      </div>

      <Card.Content>
        <Card.Header>{Config.itemName}</Card.Header>
        <Card.Meta>
          <span className='date'>{Config.itemGrade}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Input 
          fluid
          icon="user"
          iconPosition='left'
          placeholder='EOS Account Id' 
          onChange={onChangeName}
          disabled={inputDisabled}
          action={{ color: 'teal', content: 'Get', onClick:onClickGet }} />
      </Card.Content>
    </Card>
  </div>
);

export default EventPost;