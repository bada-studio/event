import React from 'react';
import { Button } from 'semantic-ui-react';
import './EventPost.css';

const EventPost = ({title, body}) => (
  <div className="EventPost">
    <h1>{title}</h1>
    <p>
      {body}
    </p>

    <Button
        color="teal"
        content="Next"
        icon="right arrow"
        labelPosition="right"
        className="Navigate-right-button"
    />     
  </div>
);

export default EventPost;