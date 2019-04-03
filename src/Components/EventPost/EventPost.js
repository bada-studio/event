import React from 'react';
import { Input, Card, Label, List} from 'semantic-ui-react';
import Config from '../../Config';
import './EventPost.css';

const EventPost = ({state, inputDisabled, gotThis, time, timeColor, imgUrl, onClickGet, onChangeName}) => (
  <div className="EventPost">
    <div>
      <a href="https://eosknights.io"><img className="SponsorIcon" src="https://eosknights.io/img/icon.png"/></a>
      <img className="CrossIcon" src="https://eosknights.io/img/cross.png"/>
      <a href={Config.sponsorLink}><img className="SponsorIcon" src="https://eosknights.io/img/bp/eosnation.png"/></a>
    </div>
        
    <h1>
      Make your EOS Fun with {Config.sponsor}!
    </h1>
    <div>
      Play EOS Knights with free {Config.itemName}.
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

    <List>
      <List.Item>One account can get only one {Config.itemName}</List.Item>
      <List.Item>Crafting Nation Armor is almost impossible.</List.Item>
      <List.Item>You can trade the {Config.itemName} and change it into magic waters.</List.Item>
      <List.Item>If you see error message, you should download the game with below links.</List.Item>
    </List>

    <div className="Link">
      <a href="https://eosknights.io/app/android/en/"><img className="SponsorIcon" src="https://eosknights.io/img/icon-google.png"/></a>
      <a href="https://eosknights.io/app/ios/en/"><img className="CrossIcon" src="https://eosknights.io/img/icon-apple.png"/></a>
      <a href="https://game.eosknights.io/"><img className="SponsorIcon" src="https://eosknights.io/img/icon-chrome.png"/></a>
    </div>

  </div>
);

export default EventPost;