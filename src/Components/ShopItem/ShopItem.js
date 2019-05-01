import React from 'react';
import { Button, Image, List } from 'semantic-ui-react';
import Config from '../../Config';
import './ShopItem.css';

const ShopItem = () => (
  <List verticalAlign='middle' className="ShopItem">
    <List.Item>
      <List.Content floated='right' className="PurchaseBox">
      <Button color='blue' compact>구매하기</Button>
      </List.Content>
      <Image className="ItemIcon" src={require('../../Images/item1.png')} />
      <List.Content>
        <List class="ItemTitleBox" verticalAlign='middle'>
          <List.Item class="ItemTitle">10 루비</List.Item>
          <List.Item><span class="WonPrice">1,000원</span> <span class="KlayPrice">(1.2512 KLAY)</span></List.Item>
        </List>                
      </List.Content>
    </List.Item>

    <List.Item>
      <List.Content floated='right' className="PurchaseBox">
        <Button color='blue' compact>구매하기</Button>
      </List.Content>
      <Image className="ItemIcon" src={require('../../Images/item2.png')} />
      <List.Content>
        <List class="ItemTitleBox" verticalAlign='middle'>
          <List.Item class="ItemTitle">20 루비</List.Item>
          <List.Item><span class="WonPrice">2,000원</span> <span class="KlayPrice">(0.2112 KLAY)</span></List.Item>
        </List>                
      </List.Content>
    </List.Item>

    <List.Item>
      <List.Content floated='right' className="PurchaseBox">
        <Button color='blue' compact>구매하기</Button>
      </List.Content>
      <Image className="ItemIcon" src={require('../../Images/item3.png')} />
      <List.Content>
        <List class="ItemTitleBox" verticalAlign='middle'>
          <List.Item class="ItemTitle">100 루비</List.Item>
          <List.Item><span class="WonPrice">9,900원</span> <span class="KlayPrice">(1.1341 KLAY)</span></List.Item>
        </List>                
      </List.Content>
    </List.Item>

    <List.Item>
      <List.Content floated='right' className="PurchaseBox">
        <Button color='blue' compact>구매하기</Button>
      </List.Content>
      <Image className="ItemIcon" src={require('../../Images/item4.png')} />
      <List.Content>
        <List class="ItemTitleBox" verticalAlign='middle'>
          <List.Item class="ItemTitle">330 루비</List.Item>
          <List.Item><span class="WonPrice">29,000원</span> <span class="KlayPrice">(3.0512 KLAY)</span></List.Item>
        </List>                
      </List.Content>
    </List.Item>

    <List.Item>
      <List.Content floated='right' className="PurchaseBox">
        <Button color='blue' compact>구매하기</Button>
      </List.Content>
      <Image className="ItemIcon" src={require('../../Images/item5.png')} />
      <List.Content>
        <List class="ItemTitleBox" verticalAlign='middle'>
          <List.Item class="ItemTitle">600 루비</List.Item>
          <List.Item><span class="WonPrice">49,000원</span> <span class="KlayPrice">(5.1512 KLAY)</span></List.Item>
        </List>                
      </List.Content>
    </List.Item>

    <List.Item>
      <List.Content floated='right' className="PurchaseBox">
        <Button color='blue' compact>구매하기</Button>
      </List.Content>
      <Image className="ItemIcon" src={require('../../Images/item6.png')} />
      <List.Content>
        <List class="ItemTitleBox" verticalAlign='middle'>
          <List.Item class="ItemTitle">1300 루비</List.Item>
          <List.Item><span class="WonPrice">99,000원</span> <span class="KlayPrice">(10.2512 KLAY)</span></List.Item>
        </List>                
      </List.Content>
    </List.Item>


  </List>
);

export default ShopItem;