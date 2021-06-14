import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'
// <App>的最外侧包裹了一个`<BrowserRouter>或<HashRouter>`
ReactDOM.render(
    // 渲染组件到页面
    // react new出了类的实例，并且调用了原型上的render()方法
  <React.StrictMode>
      <Router>
        <App />
      </Router>
  </React.StrictMode>,
//   render接收两个参数   第一个是html标签   第二个是页面的dom
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
