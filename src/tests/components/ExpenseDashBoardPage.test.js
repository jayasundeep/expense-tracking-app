import React from 'react';
import { shallow } from 'enzyme';
import ExpenceDashBoardpage from '../../components/ExpenceDashBoardpage';

test('should render Header component', () => {
    const wrapper = shallow(<ExpenceDashBoardpage />);
    expect(wrapper).toMatchSnapshot();
});