import React from "react";
import { Link } from "@reach/router";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import colors from "./colors";

const Container = styled("header")`
  background-color: ${colors.dark};
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

const Spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(720deg);
  }
`;

const SpyGlass = styled("span")`
  display: inline-block;
  animation: ${props => props.frequency}s ${Spin} linear infinite;
  border: 1px solid red;
`;

class NavBar extends React.Component {
  state = { frequency: 5 };
  halfFrequency = () => this.setState({ frequency: this.state.frequency / 2 });

  render() {
    return (
      <Container>
        <NavLink to="/">Adopt Me!</NavLink>
        <NavLink to="/search-params">
          {/* eslint-disable-next-line */}
          <SpyGlass
            onClick={this.halfFrequency}
            frequency={this.state.frequency}
            aria-label="search"
            role="img"
          >
            🔍
          </SpyGlass>
        </NavLink>
      </Container>
    );
  }
}

export default NavBar;
