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
  const [pills, setPills] = React.useState('1');

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
                  className={pills === '1' ? 'active mr-5' : ' mr-5'}
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    setPills('1');
                  }}
                >
                  <i className="now-ui-icons location_world" />
                  <span style={{ color: '#444' }}>Website</span>
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
                  <i className="now-ui-icons business_chart-bar-32" />
                  <span style={{ color: '#444' }}>Admin</span>
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </Col>
        <TabContent className="gallery" activeTab={`pills${pills}`}>
          <TabPane tabId="pills1">
            <Col className="ml-auto mr-auto" md="12">
              <Row className="collections">
                <Col md="6">
                  <img
                    alt="..."
                    className="img-raised"
                    src={require('@images/portofolio/header/legocar.png')}
                  />
                  <img
                    alt="..."
                    className="img-raised"
                    src={require('@images/portofolio/header/kaptiva.png')}
                  />
                  <img
                    alt="..."
                    className="img-raised"
                    src={require('@images/portofolio/header/loccitane.png')}
                  />
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    className="img-raised"
                    src={require('@images/portofolio/header/cbn.png')}
                  />
                  <img
                    alt="..."
                    className="img-raised"
                    src={require('@images/portofolio/header/gonegolfing.png')}
                  />
                  <img
                    alt="..."
                    className="img-raised"
                    src={require('@images/portofolio/header/amartha.png')}
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
        </TabContent>
      </Row>
    </>
  );
};

export default Portofolio;
