import logo from './logo.svg';
import './App.css';
import Mercadoria from './mercadoria.jsx';
import data from './products.json';
import { render } from 'react-dom';
import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import carrinho from './carrinho.png'

var carrinho1 =[];


//const

//function 



function Navbar_main (props){

  const {mudou, name } = props  

  return(
    <div>
    <nav class="navbar navbar-expand-lg" id="nav_main" style={{color:"bisque", backgroundColor: "blueviolet", marginBottom: "40px"}}> 
            <div class="container-fluid"> 
              <a class="navbar-brand">Free Games</a> 
            
            
                <div class="collapse navbar-collapse"  id="navbarTogglerDemo01">
                  
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  
                    <li class="nav-item dropdown">
                 
                      <select onChange={mudou} style={{border: "cornsilk 0.1px solid", marginTop: "+6px;"}}>
                          <option  value="nula">Classificar por</option>
                          <option value="a1">Ordem Alfabetica Crescente</option>
                          <option value="a2">Ordem Alfabetica Decrescente</option>
                          <option value="p1">Maior Preço</option>
                          <option value="p2" >Menor Preço</option>
                          <option value="sc">Score</option>                            
                      </select>
                      
                          
                    </li>

                      
                    </ul>
                
                </div>
          
          
          
                <form class=" form-inline">
          
                  
                        <input class="form-control " type="search"  placeholder="Search" aria-label="Search"
                        style={{backgroundColor: "#682ea2", width: "400px"}} />
          
                        <button class="btn navbar-brand" type="submit" style={{marginLeft: "-20px"}}  > 
                            <img class="rounded-circle image" src={carrinho}  style={{width: "60px", height: "auto"}} />
                        </button>
                        
                </form>
                
          
          
          
          
              </div>
                    
           
       
          
  
  
      </nav>
      </div>




  )


}



 class App extends Component {

  constructor(props){
   super(props)

         
          this.state =( {
                
            produtos: data,
            ordem: 'nula'

          })
          //updateState = updateState.bind(this)
          //this.handleChange2=this.handleChange2;


  } 

  Mudou = (e) =>
  {
      this.setState({produtos: data, ordem: e.target.value})
      
  }
  ordenar(){

    let filter = [];

   

    if(this.state.ordem == 'sc')
    {
                                      function sortSC(property){
                                        return function(a, b){
                                            if(a[property] < b[property]){
                                                return -1;
                                            }else if(a[property] > b[property]){
                                                return 1;
                                            }else{
                                                return 0;   
                                            }
                                        }
                                    }

                                    filter = this.state.produtos.sort(sortSC("score"));

                                  

                                    //this.setState({produtos: filter, ordem: this.state.ordem});

                                    return filter;
    }  
    
     if(this.state.ordem == 'a1')
     {
                                        function sortAZ(property){
                                          return function(a, b){
                                              if(a[property] < b[property]){
                                                  return -1;
                                              }else if(a[property] > b[property]){
                                                  return 1;
                                              }else{
                                                  return 0;   
                                              }
                                          }
                                      }

                                      filter = this.state.produtos.sort(sortAZ("name"));

                                     

                                      //this.setState({produtos: filter, ordem: this.state.ordem});

                                      return filter;
                                  


     }

     if(this.state.ordem == 'a2')
     {
                                        function sortZA(property){
                                          return function(a, b){
                                              if(a[property] < b[property]){
                                                  return +1;
                                              }else if(a[property] > b[property]){
                                                  return -1;
                                              }else{
                                                  return 0;   
                                              }
                                          }
                                      }

                                      filter = this.state.produtos.sort(sortZA("name"));

                                     

                                      //this.setState({produtos: filter, ordem: this.state.ordem});

                                      return filter;
                                  


     }

     if(this.state.ordem == 'p1')
     {
                                        function sort21(property){
                                          return function(a, b){
                                              if(a[property] < b[property]){
                                                  return +1;
                                              }else if(a[property] > b[property]){
                                                  return -1;
                                              }else{
                                                  return 0;   
                                              }
                                          }
                                      }

                                      filter = this.state.produtos.sort(sort21("price"));

                                     

                                      //this.setState({produtos: filter, ordem: this.state.ordem});

                                      return filter;
                                  


     }



      if(this.state.ordem == 'p2')
      {
                                         function sort12(property){
                                           return function(a, b){
                                               if(a[property] < b[property]){
                                                   return -1;
                                               }else if(a[property] > b[property]){
                                                   return 1;
                                               }else{
                                                   return 0;   
                                               }
                                           }
                                       }
 
                                       filter = this.state.produtos.sort(sort12("price"));
 
                                      
 
                                       //this.setState({produtos: filter, ordem: this.state.ordem});
 
                                       return filter;
                                   
 
 
      }





     

     
    
  
   


  }
  Adcionar = (mercadoria_id) =>{

   

          if(carrinho1.includes(mercadoria_id))
          {
            alert("Retirando do Carrinho");
          }
          else
          {
            
            alert("Adcionando ao Carrinho");
            carrinho1.push(mercadoria_id)
          }
       
          alert("Você pode ver os itens do seu carrinho"+
          "\nclicando no carrinho da barra principal do site")

  } 
  Adcionar_Frete = (price) => {

      if(parseFloat(price)> 250)
        return 'Gratis'
      else
        return 'R$ 10,00'  

  }
  Total= (price) => { 
  
        if(parseFloat(price)> 250)
           return price;
        else
          return price+10;
  
  
  }
  
  render()
  {

    const {dados} = this.state.produtos; 

    

    console.log(this.state.produtos.name);
    if(this.state.ordem == 'nula')
                  return (
                    <div className="App">
                    <Navbar_main mudou={this.Mudou}/>
                    
                      { this.state.produtos.map((items, index) =>{

                        var backgroundColornow='#ffffff';
                              
                                 
                              
                                return(
                                  
                                
                                    
                                  <div style={{display: 'inline-flex', alignItems: 'start'}}>
                                      <Mercadoria total={this.Total(items.price, this.Adcionar_Frete(items.price) )} 
                                      frete={this.Adcionar_Frete(items.price)}
                                      key={items.id} id={items.id} 
                                      bkcn={backgroundColornow} adcionar={() => this.Adcionar(items.id)}
                                      nome={items.name} preço ={items.price} fonte={items.image}/>
                                  </div>
                                
                                  )                           



                      })
                      
                      }
                    </div>
                  );
      else{
        
        var a = this.ordenar();
        console.log(this.state);

        return (
          <div className="App">
          <Navbar_main mudou={this.Mudou}/>
          
                            {
                              
                                

                              a.map((items, index) =>{

                              
                              
                                return(
                                  
                                
                                    
                                  <div style={{display: 'inline-flex', alignItems: 'start'}}>
                                      <Mercadoria  nome={items.name} preço ={items.price} fonte={items.image}/>
                                  </div>
                                
                                  )                           



                              })




                               
                            }
          
          
          
          </div>
        );
      }                  

  }

}



export default App;
