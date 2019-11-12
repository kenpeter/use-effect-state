import React from 'react';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  border: 1px solid #ccc;
  width: 500px;
`;

export function FuncTextArea({onChange = () => {}}) {
  return (
    <div>
      <h1>hi</h1>
      <StyledTextArea onChange={onChange} />
    </div>
  );
}

function App() {
  const onChange = () => {
    console.log('it works');
  };

  return (
    <div>
      <FuncTextArea onChange={onChange} />
    </div>
  );
}

export default App;
