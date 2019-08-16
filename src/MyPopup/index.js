import React from 'react';
import Popup from 'reactjs-popup';
import * as Ui from './index.style.js';

const data = require('../data.json');

const contentStyle = {
  maxWidth: '90%',
  width: '90%',
  height: '90%'
};

function MyPopup(isOpen = false) {
  console.log(isOpen);

  return (
    <div className="App">
      <Popup
        open={isOpen}
        //closeOnDocumentClick
        contentStyle={contentStyle}
        //onClose={onModalDismiss}
      >
        <Ui.StyledModal>
          <Ui.StyledAnchor /*onClick={onModalDismiss}*/>
            &times;
          </Ui.StyledAnchor>
          <Ui.ModalHeader> test </Ui.ModalHeader>
          <Ui.StyledModalContent>
            <Ui.StyledObject src={data} />
          </Ui.StyledModalContent>
          <Ui.StyledButton size="small" onClick={() => {}}>
            Download
          </Ui.StyledButton>
        </Ui.StyledModal>
      </Popup>
      );
    </div>
  );
}

export default MyPopup;
