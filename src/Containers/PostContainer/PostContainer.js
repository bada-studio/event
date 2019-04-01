import React, {Component} from 'react';
import { PostWrapper, EventPost } from '../../Components';
import { EkEventService } from "../../Services";

class PostContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      fetching: false, 
      eventInfo: null
    };

    this.ekEvent = new EkEventService(this.state.network);
  }

  fetchItemEventInfo = async () => {
    this.setState({
        fetching: true
    });

    const res = await this.ekEvent.readTable("eosknightsio", "itemevt");
    console.log(res.data);

    this.setState({
      eventInfo: res.data,
      fetching: false
    });    
  }

  componentDidMount() {
    this.fetchItemEventInfo();
  }

  render() {
    const {fetching, eventInfo} = this.state;

    return (
      <PostWrapper>
        <EventPost
            title="from test"
            body="from body"
        />
      </PostWrapper>
    );
  }
}

export default PostContainer;
