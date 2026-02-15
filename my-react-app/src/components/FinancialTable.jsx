import React from 'react';

const FinancialTable = ({ data }) => {
  return (
    <div className="table-container">
      <table className="financial-table">
        <thead>
          <tr>
            <th>Metric</th>
            <th className="text-right">Figure (FY25)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.metric}</td>
              <td className="text-right value">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinancialTable;