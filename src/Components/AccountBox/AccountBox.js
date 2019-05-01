import React from 'react';
import { Button, Image, Icon, Card } from 'semantic-ui-react';
import Config from '../../Config';
import './AccountBox.css';

const AccountBox = () => (
  <div className="AccountBox">
    <Button fluid color='yellow' size="medium">카카오 로그인</Button>
    <Card fluid>
      <Card.Content>
        <Card.Header>10.0000 KLAY</Card.Header>
        <Card.Meta>신명진</Card.Meta>
        <Card.Description>
          <a className="address" href='https://baobab.klaytnscope.com/account/0x5b10e92ea1ba4bee4ffed2e8806e5a4c125c0f25'>0x5b10e92ea1ba4bee4ffed2e8806e5a4c125c0f25</a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui three buttons'>
          <Button basic color='green'>
            입금
          </Button>
          <Button basic color='red'>
            출금
          </Button>
          <Button basic color='grey'>
            로그아웃
          </Button>
        </div>
      </Card.Content>      
    </Card>
  </div>
);

export default AccountBox;