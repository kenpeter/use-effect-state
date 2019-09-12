import React, {useRef} from 'react';
import {StyledInput} from './index.style';

function MyInput() {
  return <StyledInput />;
}

export default React.forwardRef(MyInput);
