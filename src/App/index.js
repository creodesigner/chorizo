import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import AppStore from './flux/AppStore';

import Header from '../shared-components/Header/';
import Menu from '../shared-components/Menu/';
import Page from '../modules/Page';
import NotFound from '../templates/NotFound';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: AppStore.getMenuState()
    };

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    document.body.classList.toggle('menu-open', this.state.menuOpen);
  }

  componentDidUpdate() {
    document.body.classList.toggle('menu-open', this.state.menuOpen);
  }
  
  componentWillMount() {
    AppStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this.onChange);
    document.body.classList.remove('menu-open');
  }

  onChange() {
    this.setState({
      menuOpen: AppStore.getMenuState()
    });
  }

  render() {
    const menuClass = this.state.menuOpen ? 'menu-open': 'menu-closed';

    return (
      <Router>
        <div className={`app ${menuClass}`}>
          <Header className={menuClass}/>
          <main id="main">
            <Switch>
              <Route exact path="/" render={routeProps => <Page {...routeProps}/>}/>
              <Route component={NotFound}/>
            </Switch>
          </main>
          { this.state.menuOpen && <Menu/> }
        </div>
      </Router>
    );
  }
}
