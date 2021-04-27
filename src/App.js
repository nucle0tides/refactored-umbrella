import React, { useState, useEffect } from 'react';
import Table from './Table';
import SubscriptionMRR from './SubscriptionMRR';
import Slider from './Slider';
import './App.css';

const data =
[
{"company": "Google", "status":"available", "invoiceID": "123", "mrr": 1200, "startDate": "2019-01-01", "endDate": "2020-01-01"},
{"company": "Fair", "status":"available", "invoiceID": "123", "mrr": 455, "startDate": "2019-01-01", "endDate": "2020-01-01"},
{"company": "Salesforce", "status":"available", "invoiceID": "123", "mrr": 1200, "startDate": "2019-01-01", "endDate": "2020-01-01"},
{"company": "Amazon", "status":"available", "invoiceID": "123", "mrr": 446, "startDate": "2019-01-01", "endDate": "2020-01-01"},
{"company": "Apple", "status":"available", "invoiceID": "123", "mrr": 890, "startDate": "2019-01-01", "endDate": "2020-01-01"},
{"company": "Netflix", "status":"available", "invoiceID": "123", "mrr": 1455, "startDate": "2019-01-01", "endDate": "2020-01-01"},
{"company": "Slack", "status":"available", "invoiceID": "123", "mrr": 899, "startDate": "2019-01-01", "endDate": "2020-01-01"},
{"company": "Tesla", "status":"available", "invoiceID": "123", "mrr": 5666, "startDate": "2019-01-01", "endDate": "2020-01-01"},
{"company": "Intuit", "status":"available", "invoiceID": "123", "mrr": 1200, "startDate": "2019-01-01", "endDate": "2020-01-01"},
{"company": "Sourcify", "status":"available", "invoiceID": "123", "mrr": 1200, "startDate": "2019-01-01", "endDate": "2020-01-01"},
{"company": "Abacus", "status":"available", "invoiceID": "123", "mrr": 100, "startDate": "2019-01-01", "endDate": "2020-01-01"}
];


const App = () => {
  const [maxMRR, setMaxMRR] = useState(0);
  const [totalMRR, setMRR] = useState(0);
  const [selectedContracts, setSelectedContracts] = useState([]);

  useEffect(() => {
      const total = data.reduce((acc, val) => (val.mrr + acc), 0);
      setMaxMRR(total);
  });

  return (
    <div className="App">
      <SubscriptionMRR mrrTotal={totalMRR} />
      <br/>
      <Slider
        candidateContracts={data}
        max={maxMRR}
        totalMRR={totalMRR} updateMRR={setMRR} contracts={selectedContracts} updateContracts={setSelectedContracts} />
      <Table data={data} contracts={selectedContracts} updateMRR={setMRR} selectContract={setSelectedContracts} />
    </div>
  );
};

export default App;
