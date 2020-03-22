import React from 'react';
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col
} from 'reactstrap';

const Portofolio = () => {
  const [pills, setPills] = React.useState('2');

  return (
    <>
      <Row>
        <Col className="ml-auto mr-auto" md="6">
          <h4 className="title text-center">My Portfolio</h4>
          <div className="nav-align-center">
            <Nav
              className="nav-pills-info nav-pills-just-icons"
              pills
              role="tablist"
            >
              <NavItem>
                <NavLink
                  className={pills === '1' ? 'active' : ''}
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    setPills('1');
                  }}
                >
                  <i className="now-ui-icons design_image" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={pills === '2' ? 'active' : ''}
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    setPills('2');
                  }}
                >
                  <i className="now-ui-icons location_world" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={pills === '3' ? 'active' : ''}
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    setPills('3');
                  }}
                >
                  <i className="now-ui-icons sport_user-run" />
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </Col>
        <TabContent className="gallery" activeTab={`pills${pills}`}>
          <TabPane tabId="pills1">
            <Col className="ml-auto mr-auto" md="10">
              <Row className="collections">
                <Col md="6">
                  <img
                    alt="..."
                    className="img-raised"
                    src={require('@images/bg1.jpg')}
                  />
                  <img
                    alt="..."
                    className="img-raised"
                    src={require('@images/bg3.jpg')}
                  />
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    className="img-raised"
                    src={require('@images/bg8.jpg')}
                  />
                  <img
                    alt="..."
                    className="img-raised"
                    src={require('@images/bg7.jpg')}
                  />
                </Col>
              </Row>
            </Col>
          </TabPane>
          <TabPane tabId="pills2">
            <Col className="ml-auto mr-auto" md="10">
              <Row className="collections">
                <Col md="6">
                  <img
                    alt="..."
                    className="img-raised"
                    src={require('@images/bg6.jpg')}
                  />
                  <img
                    alt="..."
                    className="img-raised"
                    src={require('@images/bg11.jpg')}
                  />
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    className="img-raised"
                    src={require('@images/bg7.jpg')}
                  />
                  <img
                    alt="..."
                    className="img-raised"
                    src={require('@images/bg8.jpg')}
                  />
                </Col>
              </Row>
            </Col>
          </TabPane>
          <TabPane tabId="pills3">
            <Col className="ml-auto mr-auto" md="10">
              <Row className="collections">
                <Col md="6">
                  <img
                    alt="..."
                    className="img-raised"
                    src={require('@images/bg3.jpg')}
                  />
                  <img
                    alt="..."
                    className="img-raised"
                    src={require('@images/bg8.jpg')}
                  />
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    className="img-raised"
                    src={require('@images/bg7.jpg')}
                  />
                  <img
                    alt="..."
                    className="img-raised"
                    src={require('@images/bg6.jpg')}
                  />
                </Col>
              </Row>
            </Col>
          </TabPane>
        </TabContent>
      </Row>
    </>
  );
};

export default Portofolio;
