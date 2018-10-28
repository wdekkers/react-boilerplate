import React from 'react';
import { Link } from 'react-router-dom';

import { GridContainer, Grid, Cell } from '../GridContainer';
import './Navigation.css';

/* eslint-disable react/prefer-stateless-function */
class Navigation extends React.Component {
  render() {
    return (
      <GridContainer full>
        <GridContainer>
          <Grid marginX marginY>
            <Cell>
              <ul className="menu">
                <li>
                  <Link to="/" href="/">
                    Service plan..
                  </Link>
                </li>
                <li>
                  <Link to="/" href="/">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/" href="/">
                    Sign Up!
                  </Link>
                </li>
                <li>
                  <Link to="/" href="/">
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="/" href="/">
                    Contact
                  </Link>
                </li>
              </ul>
            </Cell>
          </Grid>
        </GridContainer>
      </GridContainer>
    );
  }
}

export default Navigation;
