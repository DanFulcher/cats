/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import Cats from './index';
import findByTestAttr from '../../helpers/findByTestAttr';
import exampleRes from '../../helpers/exampleRes';

const setUp = (props = {}) => {
  const component = shallow(<Cats {...props} />);
  return component;
};

describe('Cats List component', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      data: exampleRes,
    };
    wrapper = setUp(props);
  });

  it('Should render without error', () => {
    const component = findByTestAttr(wrapper, 'CatsComponent');
    expect(component.length).toBe(1);
  });

  it('Should render the correct number of cats', () => {
    const component = findByTestAttr(wrapper, 'CatsComponent');
    expect(component.children().length).toBe(2);
  });
});
