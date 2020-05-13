import React from 'react';
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop.component'
import { Switch, Route } from 'react-router-dom'
import Header from './component/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component'
import { auth } from './firebase/firebase.utils'
import './App.css';



class App extends React.Component {

  constructor(){
    super()

    this.state={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.nsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div >
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path ='/' component={HomePage} />
          <Route exact path ='/shop' component ={ShopPage}/>
          <Route exact path ='/signin' component ={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
  
}



export default App;
