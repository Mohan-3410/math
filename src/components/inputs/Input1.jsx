import React, { useState } from 'react'
import Mean from '../statistics/Mean';
import "./Input1.scss"

function Input1() {
  const [tableData, setTableData] = useState([Array.from({ length: 2 }, () => '')]);
  const [isMean, setIsMean] = useState(false);

  const handleInputChange = (rowIndex, colIndex, value) => {
    const updatedData = [...tableData];
    updatedData[rowIndex][colIndex] = value;
    setTableData(updatedData);
  };

  const handleAddRow = () => {
    setTableData((prevData) => [
      ...prevData,
      Array.from({ length: 2 }, () => '')
    ]);

  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsMean(true)
    console.log('Table Data:', tableData);
  };

  return (
    <div className='Input1'>
      <form onSubmit={handleSubmit}>
        <table >
          <thead>
            <tr>
              <th>X</th>
              <th>Frequency</th>
              {/* Add more columns as needed */}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td key={colIndex} >
                    <input
                      type="text"
                      pattern="[0.0-9.0]+"
                      id={`input-${rowIndex}-${colIndex}`}
                      placeholder={`Enter value for Row ${rowIndex + 1}, Column ${colIndex + 1}`}
                      value={cell || ''}
                      autocomplete="off"
                      onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                      style={{
                        width: '100%',
                        boxSizing: 'border-box',
                        // border: '1px solid #ddd',
                        padding: '8px',
                        backgroundColor: 'var(----color-white)',
                        color: 'var(--color-dark-variant)',
                      }}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="buttons">
          <button className="add" type="button" onClick={handleAddRow}>
            <h3>Add Row</h3>
          </button>
          <button className="add" type="submit"><h3>Evaluate</h3></button>
        </div>

      </form>
      {isMean && <Mean tableData={tableData} />}
    </div>
  );
}

export default Input1