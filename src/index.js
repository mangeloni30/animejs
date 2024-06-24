import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Home from './Home';
import Player from './Player';
import Leni from './Leni';
import NotFound from './NotFound';
import Square from './Square';
import Generic from './Generic';
import TimeLine from "./components/examples/TimeLine";
import TimeLine2 from "./components/talk/TimeLine";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrap the App component with the Router */}
      <Router>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/player" element={<Player />} />
          {/* <Route path="/player" element={<Player />} /> */}
          <Route path="/generic" element={<Generic />} />
          <Route path="/leni" element={<Leni />} />
          <Route path="/timeLine" element={<TimeLine2 />} />
          <Route element={<NotFound />} />
        </Routes>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
