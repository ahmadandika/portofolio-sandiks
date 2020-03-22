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
        onClick={() => {
          window.open('https://github.com/ahmadandika');
        }}
        id="tooltip515203352"
        size="lg"
      >
        <i className="fab fa-github" />
      </Button>
      <UncontrolledTooltip delay={0} target="tooltip515203352">
        Follow me on Github
      </UncontrolledTooltip>
      <Button
        className="btn-round btn-icon"
        color="default"
        id="tooltip340339231"
        size="lg"
        onClick={() => {
          window.open('https://www.instagram.com/sandiks2121/');
        }}
      >
        <i className="fab fa-instagram" />
      </Button>
      <UncontrolledTooltip delay={0} target="tooltip340339231">
        Follow me on Instagram
      </UncontrolledTooltip>
      <Button
        className="btn-round btn-icon"
        color="default"
        id="tooltip340339231"
        size="lg"
        onClick={() => {
          window.open(
            'https://www.linkedin.com/in/ahmad-andika-saputra-81322a180/'
          );
        }}
      >
        <i className="fab fa-linkedin" />
      </Button>
      <UncontrolledTooltip delay={0} target="tooltip340339231">
        Follow me on Linkedin
      </UncontrolledTooltip>
    </div>
  </>
);

export default FollowMe;
