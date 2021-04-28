import React from 'react';

// fix "value" for slider
// candidateContracts needs to change based on what's already been selected
const Slider = ({ candidateContracts, max, totalMRR, updateMRR, contracts, updateContracts }) => {
    return (
        <input
          value={contracts.reduce((acc, val) => (acc + val.mrr), 0)}
          type="range"
          id="mrr"
          name="mrr"
          min={0}
          max={max}
          onChange={(e) => {
              if (e.target.value > totalMRR) {
                  const can = candidateContracts.filter(x => !contracts.find(y => x.company === y.company))[0];
                  if (can) {
                      updateMRR(old => old + can.mrr);
                      updateContracts(state => [...state, can]);
                  }
                  return;
              }
              // remove a contract
              const candidate = contracts.find(c => c.mrr < e.target.value);
              if (candidate) {
                  updateMRR(old => old - candidate.mrr);
                  updateContracts(state => state.filter(st => st.company !== candidate.company));
              }
          }}
        />
    );
};

export default Slider;
