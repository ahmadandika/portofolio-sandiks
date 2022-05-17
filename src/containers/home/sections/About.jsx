import React from 'react';
import { Button } from 'reactstrap';
import Fade from 'react-reveal/Fade';

const About = () => (
  <div id="about">
    <Fade ssrFadeout top>
      <h3 className="title">About me</h3>
    </Fade>
    <Fade ssrFadeout top>
      <h5 className="description">
        Versatile Front-end developer with 3+ years of experience designing,
        developing, and managing complex websites and admins. Specializes in
        ReactJS and responsive design.
      </h5>
    </Fade>
    <div className="text-center w-100">
      <Button
        color="default"
        onClick={() => {
          if (process.browser) {
            window.open('/images/cv-ahmadandika.pdf');
          }
        }}
      >
        Download My Resume
      </Button>
    </div>
  </div>
);

export default About;
