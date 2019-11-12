import React from 'react';
import {FuncTextArea} from './App';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

it('test onchange mock', () => {
  const onChange = jest.fn();
  const component = mount(<FuncTextArea onChange={onChange} value="hi" />);
  component.find('textarea').simulate('change');
  expect(onChange).toBeCalledWith('hi');
});
