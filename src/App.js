import React, {useCallback} from 'react';

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
    <table>
      <tbody>
        {items.map((item, index) => {
          return (
            <tr key={index}>
              <td>
                <a href="#">{item.file}</a>
              </td>
              <td>
                <button>{item.button}</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function App() {
  return (
    <>
      <TableElement />
    </>
  );
}

export default App;
