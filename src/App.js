import React, {useState, useEffect, useRef, createRef, useContext} from 'react';

const AppContext = React.createContext({
  name: 'AppContext'
});

function Menu({buttonName, rowIndex}) {
  const [currRowInd, setCurrRowInd] = useState('');
  const [open, setOpen] = useState(false);

  const menuItems = {download: 'download', view: 'view', delete: 'delete'};
  //test
  console.log('buttonName', buttonName);

  return (
    <div>
      <button
        onClick={() => {
          setOpen(!open);
          setCurrRowInd(rowIndex);
        }}
      >
        {buttonName}
      </button>

      {open && rowIndex === currRowInd && (
        <ul>
          {Object.keys(menuItems).map((item, ind) => {
            return <li key={ind}>{item}</li>;
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
  // active index is 0
  const [activeIndex, setActiveIndex] = useState(0);

  const appContextObj = {
    activeIndex: activeIndex,
    setActiveIndex: setActiveIndex
  };

  return (
    <>
      <AppContext.Provider value={appContextObj}>
        <TableElement />
      </AppContext.Provider>
    </>
  );
}

export default App;
