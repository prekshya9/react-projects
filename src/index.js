import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Try1 from './try';
import Practise from './try';
import Demo from './try';
import Form from './try';
import Validation from './form';
import VAlidate from './form1';
import Todolist from './todolist';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Try1/> */}
    {/* <Practise/> */}
    {/* <Demo/> */}
    {/* <Form/> */}
    {/* <Validation/> */}
    {/* <VAlidate/> */}
    <Todolist/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
