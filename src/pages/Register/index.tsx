import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { Container, PageGuide, Page, Header, Content, Menu, MenuItem, Panel } from './styles';

const Register: React.FC = () => {

  return (
    <Container>
      <PageGuide>
        <Page to="/">Home</Page> / <Page to="/register">Registro</Page>
      </PageGuide>
      <Content>
        <Menu>
          <MenuItem to="/register/pet">Pet</MenuItem>
          <MenuItem to="/register/proprietor">Proprietario</MenuItem>
          <MenuItem to="/register/veterinary">Veterinário</MenuItem>
          <MenuItem to="/register/enterprise">Empresa</MenuItem>
        </Menu>
        <Panel>
          <Outlet/>
        </Panel>
      </Content>
    </Container>
  )
}

export default Register;