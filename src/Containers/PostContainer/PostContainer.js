import React, {Component} from 'react';
import { PostWrapper, EventPost, SimpleLoader } from '../../Components';
import { ChainService } from "../../Services";
import Config from "../../Config";
import Alert from 'react-s-alert';
import axios from 'axios';

class PostContainer extends Component {
  constructor(props) {
    super();

    this.state = {
      fetching: false, 
      info: {
        id:0,
        code:0,
        from:0,
        duration:0,
      },
      name:"",
      imgUrl:"",
      time: "CLOSED",
      timeColor: "grey", 
      state: "CLOSED",
      inputDisabled: true
    };

    this.chain = new ChainService(Config.network);
  }

  getRemainText(remain) {
    const hours = String(Math.floor(remain / (60 * 60))).padStart(2, '0');
    const mins = String(Math.floor(remain / 60) % 60).padStart(2, '0');
    const secs = String(remain % 60).padStart(2, '0');
    return `${hours}:${mins}:${secs}`;
  }

  updateReaminText() {
    const { from, duration } = this.state.info;
    const end = from + duration;
    const now = Math.floor(Date.now() / 1000);

    if (end < now) {
      this.setState({
        time: "CLOSED",
        timeColor: "grey",
        state: "CLOSED",
        inputDisabled: true
      });
    } else if (now < from) {
      const remain = this.getRemainText(from - now);
      this.setState({
        time: `-${remain}`,
        timeColor: "grey",
        state: "READY",
        inputDisabled: true
      });
    } else {
      const remain = this.getRemainText(end - now);
      this.setState({
        time: `${remain}`,
        timeColor: "green",
        state: "RUN",
        inputDisabled: false
      });
    }
  }

  fetchItemEventInfo = async() => {
    this.setState({
        fetching: true
    });

    const res = await this.chain.readTable("eosknightsio", "itemevt");
    this.setState({
      info: res.data.rows[0],
      fetching: false,
      imgUrl:`https://eosknights.io/img/resource/big/item/item_${res.data.rows[0].code}.png`
    });

    this.updateReaminText();
    this.timer = setInterval(() => this.updateReaminText(), 1000);
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  onClickGet = async() => {
    if (this.state.state !== "RUN") {
      return;
    }

    if (!this.state.name) {
      Alert.error('Please fill out your eos accout id first', {
        position: 'top-right',
        effect: 'slide',
        beep: false,
        timeout: 3000
      });
      return;
    }

    this.setState({
      fetching: true
    });

    const player = await this.chain.readTableRow("eosknightsio", "player", this.state.name);
    const playerv = await this.chain.readTableRow("eosknightsio", "playerv2", this.state.name);
    this.setState({
      fetching: false
    });

    if (player == null || player.owner !== this.state.name) {
      Alert.error('Please sign up the EOS Knights first!<br/>Download EOS Knights with blow link.', {
        position: 'top-right',
        effect: 'slide',
        html: true,
        beep: false,
        timeout: 3000
      });    
      return;
    }

    if (playerv !== null && playerv.owner === this.state.name && playerv.itemevt === this.state.info.key) {
      Alert.error(`You've already got '${Config.itemName}'`, {
        position: 'top-right',
        effect: 'slide',
        beep: false,
        timeout: 3000
      });    
      return;
    }

    await this.getEventItem();
  }

  async getEventItem() {
    this.setState({
      fetching: true
    });

    const url = Config.url.bastet + this.state.name;
    await axios.get(url)
      .then(function (response) {
        Alert.success(`You got a '${Config.itemName}'!`, {
          position: 'top-right',
          effect: 'slide',
          beep: false,
          timeout: 7000
        });
      })
      .catch(function (error) {
        Alert.error(`Can not get a '${Config.itemName}'`, {
          position: 'top-right',
          effect: 'slide',
          beep: false,
          timeout: 3000
        });    
      });

    this.setState({
      fetching: false
    });
  }

  componentDidMount() {
    this.fetchItemEventInfo();
  }

  render() {
    const { 
      fetching, 
      time,
      timeColor,
      imgUrl, 
      inputDisabled
    } = this.state;

    return (
      <PostWrapper>
        <EventPost
            imgUrl={imgUrl}
            time={time}
            timeColor={timeColor}
            inputDisabled={inputDisabled}
            onClickGet={this.onClickGet}
            onChangeName={this.handleChange}
        />
        <SimpleLoader
          active={fetching}
        />
      </PostWrapper>
    );
  }
}

export default PostContainer;
