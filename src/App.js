// import './App.css';

// import React from "react"
// import { Provider } from "react-redux"
// import store from "./common/redux/store"
// import {
//   Redirect,
//   Route,
//   BrowserRouter as Router,
//   Switch,
//   BrowserRouter,
// } from "react-router-dom"

// import  { Login }  from './login/ui/login'
// import { Register } from './login/ui/register'

// import Bubbles from './login/ui/components/Bubbles/Bubbles'
// import BubbleBuilder from './login/ui/components/BubbleBuilder/BubbleBuilder';

// const token = localStorage.getItem("jsonwebtoken");
// setAuthenticationHeader(token);

// function App() {
//   return (

// <Container>
//       <Segment vertical>
//         <Switch>
//           <Route path="/" exact component={Posts} />
//           <Route path="/post/:postId" component={PostDetail} />
//           {/* Fallback Page - 404 */}
//           <Route>
//             <Segment vertical textAlign="center">
//               <Header>404 - Page not found</Header>
//               <Link to="/">Click here to return home</Link>
//             </Segment>
//           </Route>
//         </Switch>
//       </Segment>
//     </Container>



//     <BrowserRouter>
//     <Provider store = {store}>
//       <Router>
//         <Switch>
//           <Route exact path = "" exact component={Login} />
//           <Route exact path = "/register" component={Register} />
//           <Route exact path = '/bubbles' component={Bubbles} />
//           <Route exact path = '/bubble-builder' component={BubbleBuilder} />
//         </Switch>
//       </Router>
//     </Provider>
//     </BrowserRouter>
//   );
// }


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
// import Posts from './components/Posts'
// import { Container, Header, Segment } from 'semantic-ui-react'
import { Link, Route, Switch } from 'react-router-dom';
import{ Login} from './login/ui/login';
import{ Register} from './login/ui/register';
// import PostDetail from './components/PostDetail';

function App() {


return (
  // <Container>
  //   <Segment vertical>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/register" component={Register} />
        {/* Fallback Page - 404 */}
        <Route>
       
            
            <Link to="/">Click here to return home</Link>
         
        </Route>
      </Switch>
  //   </Segment>
  // </Container>
);


}export default App;
