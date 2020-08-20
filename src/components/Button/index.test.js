/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

import findByTestAttr from '../../helpers/findByTestAttr';

const setUp = (props = {}) => {
  const component = shallow(<Button {...props} />);
  return component;
};

describe('Button component', () => {
  describe('With props', () => {
    const mockCallBack = jest.fn();
    let wrapper;
    beforeEach(() => {
      const props = {
        onClick: () => mockCallBack(),
        text: 'Click Me',
      };
      wrapper = setUp(props);
    });

    it('Should render without error', () => {
      const component = findByTestAttr(wrapper, 'ButtonComponent');
      expect(component.length).toBe(1);
    });

    it('Should run function defined in props when clicked', () => {
      const component = findByTestAttr(wrapper, 'ButtonComponent');
      component.simulate('click');
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
  });
});
