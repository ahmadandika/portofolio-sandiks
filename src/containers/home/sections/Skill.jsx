import React from 'react';

// reactstrap components
import { Progress, Container, Row, Col } from 'reactstrap';

// core components

const Skill = () => {
  const [pills, setPills] = React.useState('2');
  return (
    <>
      <div className="" id="skills">
        <h3 className="title">Skills</h3>
        <Container>
          <Row>
            <Col md="4">
              <div className="progress-container">
                <span className="progress-badge">HTML</span>
                <Progress max="100" value="90">
                  <span className="progress-value">90%</span>
                </Progress>
              </div>
              <div className="progress-container progress-info">
                <span className="progress-badge">CSS</span>
                <Progress max="100" value="85">
                  <span className="progress-value">85%</span>
                </Progress>
              </div>
              <div className="progress-container progress-warning">
                <span className="progress-badge">Javascript</span>
                <Progress max="100" value="85">
                  <span className="progress-value">85%</span>
                </Progress>
              </div>
            </Col>
            <Col sm="4">
              <div className="progress-container">
                <span className="progress-badge progress-info">React JS</span>
                <Progress max="100" value="95">
                  <span className="progress-value">95%</span>
                </Progress>
              </div>
              <div className="progress-container progress-danger">
                <span className="progress-badge">Angular</span>
                <Progress max="100" value="60">
                  <span className="progress-value">60%</span>
                </Progress>
              </div>
              <div className="progress-container progress-warning">
                <span className="progress-badge">Wordpress</span>
                <Progress max="100" value="60">
                  <span className="progress-value">60%</span>
                </Progress>
              </div>
            </Col>
            <Col sm="4">
              <div className="progress-container">
                <span className="progress-badge">jQuery</span>
                <Progress max="100" value="90">
                  <span className="progress-value">90%</span>
                </Progress>
              </div>
              <div className="progress-container progress-info">
                <span className="progress-badge">Next JS</span>
                <Progress max="100" value="95">
                  <span className="progress-value">95%</span>
                </Progress>
              </div>
              <div className="progress-container progress-warning">
                <span className="progress-badge">PHP</span>
                <Progress max="100" value="70">
                  <span className="progress-value">70%</span>
                </Progress>
              </div>
            </Col>
          </Row>
          <br />
          <div className="space" />
        </Container>
      </div>
    </>
  );
};

export default Skill;
