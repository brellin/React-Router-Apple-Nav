import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import data from './assets/dummyData';
import Links from './components/Header/Links';
import SubLink from './components/Header/SubLink'
import Page from './components/Page/Page';
import Home from './components/Home/Home';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: data,
      sub: [],
      subName: ''
    }
  }

  subLinkCheck = (sub, subName) => {
    this.setState({
      sub: sub === undefined || null ? [] : sub,
      subName: subName
    });
  }

  render() {
    return (
      <div className="wrap">
        <header>
          <div className='main'>
            <Link to='/' onClick={() => this.subLinkCheck()}>
              <i className="fab fa-apple" />
            </Link>
            {this.state.links.map((link, id) => (
              <Links
                name={link.name}
                key={id}
                subName={this.state.subName}
                subLinkCheck={this.subLinkCheck}
                subLinks={link.subLinks}
              />
            ))}
            <Link to='/'>
              <i className="fas fa-search" />
            </Link>
            <Link to='/'>
              <i className="fas fa-shopping-bag" />
            </Link>
          </div>
          {this.state.sub !== [] &&
            <div className='sub'>
              {this.state.sub.map((sub, id) => <SubLink link={sub} key={id} />)}
            </div>}
        </header>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path='/' component={Home} />
          <Route
            path='/:name'
            render={props => (
              <Page name={this.state.links.filter(arr => arr.name === props.match.params.name)[0]} />
            )} />
        </AnimatedSwitch>
      </div>
    );
  }
}

export default App;
