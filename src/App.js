import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Details from './components/HomePage/Details'
import HomePage from './components/HomePage/HomePage'
import UsersPage from './components/UserPage/UserPage'
import './App.css'
import Header from './components/Header/Header'
import { Login } from './components/Login/Login'
import Register from './components/Login/Register'
import Footer from './components/Header/Footer'
import { store } from './redux/store'
import Provider from 'react-redux/src/components/Provider'

export default class App extends React.Component {
  render () {
    return (
        <Provider store={store}>
            <Router>
                <Header/>
                <div className="App">
                    <Route path="/" component={HomePage} exact/>
                    <Route path="/Work/:PhotoId" component={Details} exact={true}/>
                    <Route path="/cabinet" component={UsersPage}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                </div>
                <Footer/>
            </Router>
        </Provider>
    )
  }
};
// 2021 e44alex. All rights reserved
