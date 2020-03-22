/*eslint-disable*/
import React from 'react';

// reactstrap components
import { Container } from 'reactstrap';

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <div className="copyright" id="copyright">
            {/* © {new Date().getFullYear()}, Designed by{' '}
            <a
              href="https://www.invisionapp.com?ref=nukr-default-footer"
              target="_blank"
            >
              Invision
            </a>
            . Coded by{' '}
            <a
              href="https://www.creative-tim.com?ref=nukr-default-footer"
              target="_blank"
            >
              Creative Tim
            </a>
            . */}
            <i className="now-ui-icons ui-1_email-85" />{' '}
            <span>ahmad.andika212@gmail.com</span>
            <i className="now-ui-icons tech_mobile ml-3" />{' '}
            <span>085732721030</span>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
