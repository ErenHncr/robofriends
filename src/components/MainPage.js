import React, { Component } from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import Scroll from '../components/Scroll';
import Header from '../components/Header';
import '../containers/App.css';


class MainPage extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  filteredRobots = () => {
    return this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes
        (this.props.searchField.toLowerCase())
    })
  }

  render() {
    const { onSearchChange, robots, isPending } = this.props;


    if (isPending === true) {
      return <h1>Loading</h1>
    }
    return (
      <div className='tc' >
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {isPending ? <h1>Loading</h1> :
            <ErrorBoundry>
              <CardList robots={this.filteredRobots()} />
            </ErrorBoundry>
          }
        </Scroll>
      </div>
    )

  }

}

export default MainPage;