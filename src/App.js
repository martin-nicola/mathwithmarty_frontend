import './App.css'
import React from 'react'
import MyNav from './components/Navbar/Navbar';
import Headliner from './components/Headliner/Headliner';
import Tutoring from './components/Tutoring/Tutoring';
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Schedule from './components/Scheduler/Scheduler';
import Payment from './components/Payment/Payment';

export default class App extends React.Component {
  
  state = {
    user: null,
  }

  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData})
  }

  handleLogOut = () => {
    localStorage.removeItem('token')
    this.setState({user: null}) 
  }

  grabUserData() {
    let token = localStorage.getItem('token')
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1])); // decode token
      if (payload.exp < Date.now() / 1000) {  // Check if our token is expired, and remove if it is (standard/boilerplate)
        localStorage.removeItem('token');
        token = null;
      } else { // token not expired! our user is still 'logged in'. Put them into state.
        let userDoc = payload.user // grab user details from token
        this.setState({user: userDoc})      
      }
    }
  }

  componentDidMount() {
    this.grabUserData();
  }

  render() {
    return (
      <div className="App">
        <MyNav user={this.state.user} handleLogOut={this.handleLogOut}/>
        <Routes>
          <Route path="/" element={
          <div className="main-container">
            <Headliner />
            <Tutoring/>
          </div>
          }/>
          <Route path="/schedule" element={
            <Schedule />
          }/>
          <Route path="/payment" element={
            <Payment />
          }/>
          <Route path="/signup" element={<Signup setUserInState={this.setUserInState}/>} />
          <Route path="/login" element={<Login setUserInState={this.setUserInState}/>} />
        </Routes>
      </div>
    );
  }
}
