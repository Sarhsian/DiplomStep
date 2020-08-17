import React from 'react';
import { Container } from 'reactstrap';
import NavMenu from '../components/navmenu/NavMenu';

export default props => (
  <div>
    <NavMenu />
    <Container>
      {props.children}
    </Container>
  </div>
);
