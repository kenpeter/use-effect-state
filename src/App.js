// https://codesandbox.io/s/qxqq75764
import React, {useCallback, useEffect} from 'react';
import {useDispatch, useMappedState} from 'redux-react-hook';

function App() {
  useEffect(() => {
    dispatch({type: 'ITEMS_GET'});
  }, []);

  const mapState = useCallback(
    state => ({
      items: state.items
    }),
    []
  );
  const {items} = useMappedState(mapState);

  const dispatch = useDispatch();

  return <div>{items.title}</div>;
}

export default App;
