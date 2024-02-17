
import React from 'react';
 import ReactDOM from 'react-dom/client';
import './index.css';

 import Ajith from './App';
 import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
// var data=(
//   <>
//   <table  clasemployname="ajith">
//     <tr><th>s.no</th><th>employname</th></tr>
//     <tr><td>1001</td><td>ajith</td></tr>
//     <tr><td>1002</td><td>arun</td></tr>
//     <tr><td>1003</td><td>bharat</td></tr>
//     <tr><td>1004</td><td>dinesh</td></tr>
//   </table>
//   <ol>
//     <li>sunday</li>
//     <li>monday</li>
//     <li>tuesday</li>
//   </ol>
//   </>
// )
// var a=20
//  var b=30
// var mydata=<>
// <h1 clasemployname='ajith'>welcome to jsx</h1>
// <h1>welcome to header</h1>
// <h1>total:{a*b}</h1>
//  </>
// nested argument passing
//  var sobj={
//             employId:1001,
//             employname:"ajith",
//             marks:
//          {
//              tamil:28,
//             english:89,
//              maths:35,
//             science:100,
//             social:100,
//          geography:100,
//          history:90
                                                    
//  }
 
// }

// ReactDOM.render(<Ajith student={sobj}/>,document.getElementById('root'))

//  ReactDOM.render(<Ajith employId="1001" employname="ajith" mark="100"/>,document.getElementById('root'))


// ReactDOM.render(mydata,document.getElementById('root'))

 const root = ReactDOM.createRoot(document.getElementById('root'));
 
 
 
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Ajith />
  </BrowserRouter>,
  </React.StrictMode>
)

//If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 reportWebVitals(); 
