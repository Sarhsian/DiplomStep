import React from 'react';
import { Route, Redirect } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import ProductsPage from './components/products';
import PostsPage from './components/posts';
import RegisterPage from './components/auth/register/RegisterPage'
import LoginPage from './components/auth/login/LoginPage';

/*function requireAuth (nextState, replaceState) {
  console.log(nextState.location.pathname)
  if(localStorage.getItem('jwtToken')) {
    console.log("jwt");
    replaceState({ nextPathName: nextState.location.pathname }, '/')
  }
  else
  {
    console.log("no jwt");
  }
}*/

export default () => (
  
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
    <Route path='/products/:page?' component={ProductsPage} />
    <Route path='/posts' component={PostsPage} />
    <Route exact path="/login" render={() => (
  localStorage.getItem('jwtToken') ? (
    <Redirect to="/profile"/>
  ) : ( <LoginPage />
  )
)}/>
    <Route exact path="/register" render={() => (
  localStorage.getItem('jwtToken') ? (
    <Redirect to="/profile"/>
  ) : ( <RegisterPage />
  )
)}/>
   
  </Layout>
);
