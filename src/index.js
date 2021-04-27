import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);
