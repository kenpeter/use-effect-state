import {call, take, put} from 'redux-saga/effects';
import SagaTester from 'redux-saga-tester';
import reducer from './reducer';
import {getItemsSaga} from './saga';

const initialState = {
  reducer: {
    loading: true,
    items: []
  }
};

// mid-ware, store, next, action, next
const middleware = store => next => action =>
  next({
    // form single object
    ...action,
    // meta: MIDDLEWARE_TEST
    meta: ''
  });

// options are passed to createSagaMiddleware?????
// on error with console.error
const options = {onError: console.error.bind(console)};

it('Showcases the tester API', async () => {
  const sagaTester = new SagaTester({
    initialState,
    reducers: {reducer: reducer},
    middlewares: [],
    options
  });

  sagaTester.start(getItemsSaga);

  // init
  expect(sagaTester.getState()).toEqual(initialState);

  sagaTester.dispatch({type: 'ITEMS_GET'});
  await sagaTester.waitFor('ITEMS_GET_SUCCESS');

  /*
  sagaTester.getCalledActions().forEach(action => {
    // action.meta === ....
    expect(action.meta).toEqual(middlewareMeta);
  });
  */

  expect(sagaTester.getState()).toEqual({
    reducer: {
      items: {
        completed: false,
        id: 1,
        title: 'delectus aut autem',
        userId: 1
      },
      loading: false
    }
  });

  /*
  // Dispatch the event to start the saga
  // * Fire get action
  sagaTester.dispatch({type: fetchRequestActionType});

  // Hook into the success action
  // * wait for success
  await sagaTester.waitFor(fetchSuccessActionType);

  // Check that all actions have the meta property from the middleware
  // each action
  sagaTester.getCalledActions().forEach(action => {
    // action.meta === ....
    expect(action.meta).to.equal(middlewareMeta);
  });
  */
});
