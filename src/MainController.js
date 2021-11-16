import React from "react";
import Login from './components/LoginController';
import Home from "./components/HomeController";
import axios from 'axios';
import AOS from 'aos';
import "aos/dist/aos.css";
import "./components/Homw.css";


class LoginControl extends React.Component {
      constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.state = {isLoggedIn: true, responseMessage:  true, msg: false};
    }

      
    componentDidMount() {
      AOS.init({    
          delay: 0,
          duration: 1000, 
          easing: 'ease',
          once: true, 
          mirror: false
      });
      AOS.refresh();

  
    }
  
    handleLoginClick(values, actions) {

      const pwd = values.password;
      // console.log(event.target[0].value)
      axios.post(`/.netlify/functions/getProject`, { pwd })
      .then(res => {
        const response = res.data;
        if( response.loginAllowed ) {
          this.setState({isLoggedIn: true});
        }else{
          this.setState({isLoggedIn: false, responseMessage: false, msg:response.message })
        }
      })
      
    }
    
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;

      return (
        <div>
          {/* { ! this.state.isLoggedIn &&  ! this.state.responseMessage && <Message msg={this.state.msg} /> } */}
          { ! this.state.isLoggedIn && <Login handleOnSubmit={this.handleLoginClick} msg={this.state.msg} responseMessage={this.state.responseMessage} /> }
          { this.state.isLoggedIn && <Home isLoggedIn={isLoggedIn} /> }
        </div>
      );
    }
  }



  export default LoginControl;
