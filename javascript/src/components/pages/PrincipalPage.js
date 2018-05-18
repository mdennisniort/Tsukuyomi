import React, {Component} from 'react';
import Popup from './PopupPage'
import axios from 'axios';
import * as PrincipalService from '../services/PrincipalService';

// Page Principale


export class PrincipalPage extends Component {

    constructor (props) {
        super(props)
        this.state = {file: '',imagePreviewUrl: '', value: 'select', showPopup: false};
 
    
    }
    onChange(e) {
        this.setState({
          value: e.target.value
        })
      }


     handleLogout(){
       
     //   this.props.history.replace('/Login');
        togglePopup()
        }

     add(value,file){
        PrincipalService.getPrincipal()
        .then(res => {
            this.props.history.replace('/PrincipalPage');
        })
    }

     
      _handleImageChange(f) {
        f.preventDefault();
    
        let reader = new FileReader();
        let file = f.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
            

      }

      togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
      }

  
/*
add(number,file){
    this.PrincipalFunction.add(this.state.number, this.state.file)   
    this.PrincipalFunction.check(res)     
    }


advanced(avances){
    this.props.history.replace('/Advanced');
}

    componentDidMount() {
        PrincipalService.getPrincipal()
        .then(text => this.setState({loading: false, text: text.sample}))
  }
*/

render() {
    
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img className="img" src={imagePreviewUrl} />);
    } 

    return(
           
        <div>         
             <div className="rule"><h2>Pour une meilleure qualité, vos fichiers images doivent être en 1920 x 1080.</h2></div>
                  <br />
             <div className="rule"><h3>Votre page remplacera l'ancienne. Prenez la page 1 par défaut.</h3></div>
             <h3 className="rule">Deux images ne peuvent pas avoir le même nom.</h3>
                  <br /><br />
             <div className="selection">Sélection de l'image</div>
                  <br />
             <div>
             <div>
                <div >
                    <input className="file" type="file" onChange={(f)=>this._handleImageChange(f)} />
                       <br /> <br /> 
                    <div className="imgPreview">{$imagePreview}</div>
                </div>
              
                </div>  
           
                    <br /> <br />
                <div className="selection">Sélection de la page
                    <br />
                <select value={this.state.value} onChange={this.onChange.bind(this)} className="options">
                    <option value="57">Page 1</option>
                    <option value="58">Page 2</option>
                    <option value="55">Page 3</option>
                </select>
               </div>
             </div>            
                <br /> <br /> 
            <div>
                <button type="submit" className="button2" onClick={this.add.bind(this)}>Valider la page</button>
            </div>
                <br /> <br /> 
            <div>
                <button type="button" className="button3" onClick={this.togglePopup.bind(this)}>Retour</button>
                {this.state.showPopup ? 
               <Popup 
                text='Votre image a été ajoutée.' 
                closePopup={this.togglePopup.bind(this)}
            />
            : null
        }
            </div>
        </div>
        

     )
    }
 }
 


 export default PrincipalPage;
