import React, { Component, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'
import { checkPropTypes } from 'prop-types'
import App from './App'
import data from './products.json'



class Select_ordem extends Component {

    
    handleChange(e){
      
     
         //App.updateordem(e.target.value)

         this.setState({produtos: data, ordem: e.target.value})
         
         //alert(this.state);
    }
    render(){

     

     return(
     
         <div>

             <li class="nav-item dropdown">
                 
                 <select onChange={this.handleChange} style={{border: "cornsilk 0.1px solid", marginTop: "+6px;"}}>
                     <option  value="">Classificar por</option>
                     <option value="a1">Ordem Alfabetica Crescente</option>
                     <option>Ordem Alfabetica Decrescente</option>
                     <option >Maior Preço</option>
                     <option value="p2" >Menor Preço</option>
                     <option >Popularidade</option>                            
                 </select>
                 
                     
             </li>


     </div>
 
     );




     }  
 
 
    
 }


export default Select_ordem 