import * as React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';

interface NavProps {
  clearToken: any;
};

interface NavState {
  isOpen: boolean;
}

export default class Sitebar extends React.Component<NavProps, NavState> {
  state: NavState = {
    isOpen: false
  }

  toggle = (): void => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Navbar color="faded" light expand="md">
        {/* <NavbarBrand href="/">GRINDHOUSE</NavbarBrand> */}
        <NavbarToggler
          onClick={this.toggle}
        />
        <Collapse
          isOpen={this.state.isOpen}
          navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>

            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
    


