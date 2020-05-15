import { shallow } from 'enzyme';
import React from 'react'
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps} />)
})

it('renders MainPage without crashing', () => {
  expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly', () => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
      }
    ],
    searchField: 'john',
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps} />)
  expect(wrapper.instance().filteredRobots()).toEqual([
    {
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }
  ]);
})

it('filters robots correctly2', () => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
      }
    ],
    searchField: 'a',
    isPending: false
  }
  const filteredRobots = [];
  wrapper = shallow(<MainPage {...mockProps} />)
  expect(wrapper.instance().filteredRobots()).toEqual(filteredRobots);
})