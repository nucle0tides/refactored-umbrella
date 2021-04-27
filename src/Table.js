import React from 'react';
import Table from 'react-bootstrap/Table';

// calculate MRR correctly
// maybe change state in App.js to an array or obj idk

// some set of selected contracts, on state change, check those boxes
const TradingTable = ({ data, updateMRR, contracts, selectContract }) => {
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
                        selectContract(state => {
                            if (e.target.checked) {
                                return [...state, { company: x.company, mrr: x.mrr }]
                            } else {
                                return state.filter(st => x.company !== st.company);
                            }
                        });

                        if (e.target.checked) {
                            updateMRR(old => old + x.mrr);
                        } else {
                            updateMRR(old => old - x.mrr);
                        }
                    }}
                           checked={contracts.some(contract => contract.company === x.company)}
                    />
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
