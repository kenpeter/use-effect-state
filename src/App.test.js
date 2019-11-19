import React from 'react';
import App from './App';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import {StoreContext} from 'redux-react-hook';
import {cleanup} from '@testing-library/react';

let setUp;
const mockStore = configureStore();
configure({adapter: new Adapter()});
afterEach(cleanup);

describe('App', () => {
  beforeEach(() => {
    const initialState = {};

    const store = mockStore(initialState);

    // Set up the text area with theme and store
    setUp = () => {
      return mount(
        <StoreContext.Provider value={store}>
          <App />
        </StoreContext.Provider>
      );
    };
  });

  it('test useEffect', () => {
    const element = setUp();
    expect(element.find(App).exists()).toEqual(true);
  });
});
