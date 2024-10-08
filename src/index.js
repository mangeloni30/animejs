import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NotFound from './NotFound';
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import Component4 from "./components/Component4";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrap the App component with the Router */}
      <Router>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/component1" element={<Component1 />} />
          <Route path="/component2" element={<Component2 />} />
          <Route path="/component3" element={<Component3 />} />
          <Route path="/component4" element={<Component4 />} />
          <Route element={<NotFound />} />
        </Routes>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
