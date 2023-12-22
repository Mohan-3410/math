import React, { useEffect, useState } from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import "./Mean.css"
function Mean({ tableData }) {
  const [summation, setSummation] = useState({
    x: 0,
    y: 0,
    xy: 0
  });

  useEffect(() => {
    // Calculate summation and product when component mounts or when tableData changes
    let sumX = 0;
    let sumY = 0;
    let sumXY = 0;

    for (const row of tableData) {
      sumX += parseFloat(row[0]);
      sumY += parseFloat(row[1]);
      sumXY += parseFloat(row[0]) * parseFloat(row[1]);
    }

    setSummation({
      x: sumX,
      y: sumY,
      xy: sumXY
    });
  }, [tableData]);
  return (
    <>
      <h2>Mean</h2>
      <table >
        <thead>
          <tr>
            <th >x</th>
            <th >y</th>
            <th >xy</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {tableData?.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td key={rowIndex} >
                {row[0]}
              </td>
              <td key={rowIndex + 1} >
                {row[1]}
              </td>
              <td key={rowIndex + 2} >
                {row[0] * row[1]}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>

          <tr key='summation'>
          
            <th >
              <InlineMath math="\displaystyle\sum x_i" /> = {summation.x}
            </th>
            <th >
              <InlineMath math="\displaystyle\sum y_i" /> = {summation.y}
            </th>
            <th >
              <InlineMath math="\displaystyle\sum x_iy_i" /> = {summation.xy}
            </th>
          </tr>
        </tfoot>
      </table>
      <BlockMath math={`\\text{Mean} \\left( \\mu \\right) = \\frac{\\displaystyle\\sum x_iy_i}{\\displaystyle\\sum y_i} = \\frac{${summation.xy}}{${summation.y}}`}/>
      <BlockMath math={`\\left( \\mu \\right) = {${summation.xy/summation.y}}`}/>
    </>
  )
}

export default Mean