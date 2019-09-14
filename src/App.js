import React, {useCallback} from 'react';
import AutoComplete from './AutoComplete';

function App() {
  return (
    <>
      <AutoComplete
        suggestions={['White', 'Black', 'Green', 'Blue', 'Yellow', 'Red']}
      />
    </>
  );
}

export default App;
