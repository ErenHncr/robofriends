import { shallow } from 'enzyme';
import React from 'react'
import CardList from './CardList';

it('expect to render CardList component ', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      email: 'john@gmail.com'
    },
    {
      id: 2,
      name: 'John Snow',
      email: 'john@gmail.com'
    },
  ]
  expect(shallow(<CardList robots={mockRobots} />).debug()).toMatchSnapshot();
});