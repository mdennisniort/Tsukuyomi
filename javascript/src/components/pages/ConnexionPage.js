import React, {Component} from 'react';
import * as ConnexionService from '../services/ConnexionService';

// Page de connexion

export class Login extends Component {
  constructor(){
    super();

  }


  buttonClicked() {
      ConnexionService.getConnexion();
      this.props.history.replace('/PrincipalPage');
  }


  render() {

    return (      
      <div>
          <button type="button" className="button" onClick={this.buttonClicked.bind(this)}>Accéder à Tsukuyomi</button>
      </div>
          );
      }
      
    
  
   
    
  //   componentWillMount(){
  //     if(this.Auth.loggedIn())
  //         this.props.history.replace('/PagePrincipale');
  // }

  //   componentDidMount() {
  //   ConnexionService.getConnexion()
  //     .then(text => this.setState({loading: false, text: text.connexion}))
  // }
  

}

export default Login;