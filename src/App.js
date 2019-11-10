import React, {useState, useEffect, useRef, createRef, useContext} from 'react';

const AppContext = React.createContext({
  name: 'AppContext'
});

function Menu({buttonName, rowIndex}) {
  const [currRowInd, setCurrRowInd] = useState('');
  const [open, setOpen] = useState(false);
  // active index is 0
  const [menuItemActiveIndex, setMenuItemActiveIndex] = useState(-1);

  const menuItems = {download: 'download', view: 'view', delete: 'delete'};

  // on the button level
  const buttonIconKeyDown = (event, rowIndex) => {
    if (event.keyCode === 13) {
      // Enter pressed
      console.log('enter is pressed');

      setOpen(!open);
      setCurrRowInd(rowIndex);
    } else if (event.keyCode === 9) {
      // tab away
      console.log('tab away');

      setOpen(!open);
      setCurrRowInd('');
    } else if (event.keyCode === 40) {
      //test
      console.log('down arrow');

      // 38 is up arrow

      // No scrolling
      event.preventDefault();

      // set to 1st item in 0 index
      setMenuItemActiveIndex(0);
    }
  };

  // * rowIndex is table row index pass down
  // * currRowInd is which button we click no that row
  // * ind is menu item index
  return (
    <div>
      <button
        /*
        onClick={event => {
          setOpen(!open);
          setCurrRowInd(rowIndex);
        }}
        */
        onKeyDown={event => {
          //test
          console.log('parent buttonicon onkeydown: ');
          buttonIconKeyDown(event, rowIndex);
        }}
      >
        {buttonName}
      </button>

      {open && rowIndex === currRowInd && (
        <ul style={{padding: '5px', margin: '10px', border: '1px solid #ccc'}}>
          {Object.keys(menuItems).map((item, ind) => {
            if (ind === menuItemActiveIndex)
              return (
                <li
                  key={ind}
                  style={{
                    listStyle: 'none',
                    padding: '5px',
                    backgroundColor: 'blue'
                  }}
                >
                  <button>{item}</button>
                </li>
              );
            else
              return (
                <li key={ind} style={{listStyle: 'none', padding: '5px'}}>
                  <button>{item}</button>
                </li>
              );
          })}
        </ul>
      )}
    </div>
  );
}

function TableElement() {
  const items = [
    {
      file: 'file1',
      button: 'button1'
    },
    {
      file: 'file2',
      button: 'button2'
    },
    {
      file: 'file3',
      button: 'button3'
    }
  ];
  return (
    <table style={{borderCollapse: 'collapse', border: '1px solid black'}}>
      <tbody>
        {items.map((item, index) => {
          return (
            <tr key={index}>
              <td style={{border: '1px solid black'}}>
                <a href="#">{item.file}</a>
              </td>
              <td style={{border: '1px solid black'}}>
                <Menu buttonName={item.button} rowIndex={index} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function App() {
  const appContextObj = {};

  return (
    <>
      <AppContext.Provider value={appContextObj}>
        <TableElement />
      </AppContext.Provider>
    </>
  );
}

export default App;
