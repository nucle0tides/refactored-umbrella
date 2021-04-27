import React from 'react';
import Table from 'react-bootstrap/Table';

// calculate MRR correctly
// maybe change state in App.js to an array or obj idk
const TradingTable = ({ data, updateMRR }) => {
    return (
        <Table>
          <thead>
            <tr>
              <td></td>
              <td>
                Company
              </td>
              <td>
                MRR
              </td>
            </tr>
          </thead>
          <tbody>
            {data.map(x => (
                <tr key={x.company}>
                  <td>
                    <input type="checkbox" onChange={(e) => {
                        if (e.target.checked) {
                            updateMRR(old => old + x.mrr);
                        } else {
                            updateMRR(old => old - x.mrr);
                        }
                    }}/>
                  </td>
                  <td>{x.company}</td>
                  <td>{x.mrr}</td>
                </tr>
            ))}
          </tbody>
        </Table>
    );
};

export default TradingTable;
