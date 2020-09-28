import React from 'react';
import { shallow } from 'enzyme';
import NotFoundpage from '../../components/NotFoundpage';

test('should render Header component', () => {
    const wrapper = shallow(<NotFoundpage />);
    expect(wrapper).toMatchSnapshot();
});