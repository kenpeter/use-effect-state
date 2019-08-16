import styled from 'styled-components';

export const StyledModal = styled.div`
  width: 100%;
  height: 100%;
  background: white;
`;

export const ModalHeader = styled.div`
  width: 100%;
  border-bottom: 2px solid lightgray;
  font-size: 25px;
  text-align: left;
  padding: 10px 2px;
`;

export const StyledModalContent = styled.div`
  width: 100%;
  height: 82%;
  border-bottom: 2px solid lightgray;
  padding: 10px 2px;
  margin-bottom: 1%;
`;

export const StyledAnchor = styled.a`
  cursor: pointer;
  position: absolute;
  display: block;
  padding: 2px 5px;
  line-height: 20px;
  right: -1px;
  top: -1px;
  font-size: 24px;
  background: transparent;
`;

export const StyledObject = styled.embed`
  width: 100%;
  height: 100%;
`;

// button float right
export const StyledButton = styled.button`
  float: right;
`;
