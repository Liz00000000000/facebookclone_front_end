import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import User from './Components/User';
import UserIndex from './Components/UserIndex';
import Landing from './Components/Landing'



// ReactDOM.render((
//   <Router>
//     <div>
//       {/* <Nav /> */}
//       <Route path="/users" component={UserIndex} />
      
//       {/* <Route path="/users/:id" component={User} /> */}
//       <Route path="/" component={Landing} />
//       {/* <App /> */}
//     </div>
    
//   </Router>
//   ),
//   document.getElementById('root')
// );

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
