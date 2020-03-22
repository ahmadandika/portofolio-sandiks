import React from 'react';
import { Button, UncontrolledTooltip } from 'reactstrap';

const FollowMe = () => (
  <>
    <div className="button-container">
      <Button className="btn-round" color="info" size="lg">
        Follow
      </Button>
      <Button
        className="btn-round btn-icon"
        color="default"
        id="tooltip515203352"
        size="lg"
      >
        <i className="fab fa-twitter" />
      </Button>
      <UncontrolledTooltip delay={0} target="tooltip515203352">
        Follow me on Twitter
      </UncontrolledTooltip>
      <Button
        className="btn-round btn-icon"
        color="default"
        id="tooltip340339231"
        size="lg"
      >
        <i className="fab fa-instagram" />
      </Button>
      <UncontrolledTooltip delay={0} target="tooltip340339231">
        Follow me on Instagram
      </UncontrolledTooltip>
    </div>
  </>
);

export default FollowMe;
