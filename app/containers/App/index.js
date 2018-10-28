/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { GridContainer } from 'components/GridContainer';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import TopBar from 'components/TopBar';
import Navigation from 'components/Navigation';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Newsletter from 'components/Widgets/Newsletter';
import ZipCodeValidator from 'components/Widgets/ZipCodeValidator';

export default function App() {
  return (
    <div>
      <GridContainer full>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
          <meta
            name="description"
            content="A React.js Boilerplate application"
          />
        </Helmet>
        <TopBar />
        <Navigation />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/features" component={FeaturePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <Newsletter />
        <ZipCodeValidator />
        <Footer />
      </GridContainer>
    </div>
  );
}
