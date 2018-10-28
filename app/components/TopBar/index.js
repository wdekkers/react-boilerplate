import React from 'react';

import { GridContainer, Grid, Cell } from '../GridContainer';
import './TopBar.css';
import { email, telephone } from '../../constants';
/* eslint-disable react/prefer-stateless-function */
class TopBar extends React.Component {
  render() {
    return (
      <GridContainer className="TopBar padding-vertical-1" full>
        <GridContainer>
          <Grid marginX>
            <Cell sizes="medium-6">Yelp, fb, pinterest, instagram</Cell>

            <Cell sizes="medium-6">
              <a href="mailto:{email}">{email}</a>{' '}
              <a href="tel:{telephone}">{telephone}</a>
            </Cell>
          </Grid>
        </GridContainer>
      </GridContainer>
    );
  }
}

export default TopBar;
