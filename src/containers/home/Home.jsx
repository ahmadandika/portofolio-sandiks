import React, { useEffect } from 'react';
import IndexNavbar from '@components/navbars/IndexNavbar';
import ProfilePageHeader from '@components/headers/ProfilePageHeader';
import { Container } from 'reactstrap';
import DefaultFooter from '@components/footers/DefaultFooter';
import About from './sections/About';
import FollowMe from './sections/FollowMe';
import Portofolio from './sections/Portofolio';

const Home = () => {
  const cleanup = () => {
    document.body.classList.add('profile-page');
    document.body.classList.remove('sidebar-collapse');
  };

  useEffect(() => {
    document.body.classList.add('profile-page');
    document.body.classList.add('sidebar-collapse');
    document.documentElement.classList.remove('nav-open');
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return cleanup;
  });

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <FollowMe />
            <About />
            <Portofolio />
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
};

export default Home;
