import logo from './logo.svg';
import './App.css';
import Mercadoria from './mercadoria.jsx';
import data from './products.json';
import { render } from 'react-dom';
import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import carrinho from './carrinho.png'
import trash from './trash.png'

//var carrinho1 =[];



//const

//function 




function Lista(prosp){

   const {remover, display1, carrinho2} = prosp;

  
      /*

             <li class="list-group-item" 
            style={{display:"flex", flexWrap: "wrap", justifyContent: "left", position: "relative", alignItems: "center"}}>
                
                <p style={{fontFamily: "Helvetica, Arial, sans-serif", 
                fontWeight:"bolder", color: "rgb(61, 58, 58)"}} > nome </p>

                <p style={{fontFamily: "Helvetica, Arial, sans-serif", 
                fontWeight:"bolder", color: "rgb(124, 110, 110)", fontStyle: "italic", marginLeft: "5px"}}> total </p>

                <img style="width: 30px; height: auto; margin-top: -20px 0 0 5px;" src=""/>
            
            </li>

      */

            
      var lista1=[]; 
      

      

       for(var i =0; i<= carrinho2.length; i++)    
        {
          var a = data.filter( obj => (obj.id == carrinho2[i]));
          //console.log("Add1", a);

          //lista1.push(Object.assign({}, a));//[{}]

           lista1.push(a.map(

                          (items, index) => {
                          
                            var total = 0;
                            
                              
                          

                                if(items.price > 250)
                                  total = items.price;
                                else
                                  total = items.price + 10;  
                            
                              

                                  return(
                  
                                      
                                              <div>
                                              <li key={items.id} className="list-group-item" 
                                              style={{display:"flex", flexWrap: "wrap", justifyContent: "left", 
                                              alignItems:'center', width:'300px', backgroundColor:'#8f9196'}}>
                                                  
                                                  <p  style={{fontFamily: "Helvetica, Arial, sans-serif", 
                                                  fontWeight:"bolder", color: "rgb(61, 58, 58)"}} > {items.name} </p>
                                  
                                                  <p style={{fontFamily: "Helvetica, Arial, sans-serif", 
                                                  fontWeight:"bolder", color: "rgb(124, 58, 58)", fontStyle: "italic", marginLeft: "5px"}}> 
                                                  Preço total é {total} </p>


                                                  <img className="rounded-circle image" src={trash} 
                                                  onClick={remover} id={items.id} 
                                                  style={{width: "40px", height: "auto", margin: "-20px 0 0 15px", left: '200px'}} />
                                  
                                                
                                              
                                              </li>
                                              </div>
                  
                  
                  
                                  );
                  



                          })





           ) 
          
        
        

            


          
        }

       


                if(carrinho2.length == 0 )
                    return null;
                else
                    return ( <div> <ul  id="lista_carrinho"  class="list-group" 
                style={{position:'absolute', justifyContent:"center", 
                top: '80px', left:'40%'}}> {lista1} </ul> </div> );
              
    
   


}


const Navbar_main = ({mudou, name, botãocarrinho, AE_lista}) => {

  

  

  return(
    <div>
    <nav className="navbar navbar-expand-lg" id="nav_main" style={{color:"bisque", backgroundColor: "blueviolet", marginBottom: "40px"}}> 
            <div className="container-fluid"> 
              <a className="navbar-brand">Free Games</a> 
            
            
                <div className="collapse navbar-collapse"  id="navbarTogglerDemo01">
                  
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  
                    <li className="nav-item dropdown">
                 
                      <select onChange={mudou} style={{border: "cornsilk 0.1px solid", marginTop: "6px"}}>
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
          
             
          
                <form className=" form-inline">
          
                  
                        <input className="form-control " type="search"  placeholder="Search" aria-label="Search"
                        style={{backgroundColor: "#682ea2", width: "400px"}} />
          
                        
                            <img onClick={AE_lista} class="rounded-circle image" src={carrinho}  style={{width: "60px", height: "auto"}} />
                        
                        
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
            ordem: 'nula',
            carrinho1: [],
            display_car: 'none'

          })
          //updateState = updateState.bind(this)
          //this.handleChange2=this.handleChange2;


  } 

  Mudou = (e) =>
  {
      this.setState({produtos: data, ordem: e.target.value, carrinho1: this.state.carrinho1, display_car: this.state.display_car })
      
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

   var todos = this.state.carrinho1;

          if(todos.includes(mercadoria_id))
          {
            alert("Retirando do Carrinho");
            todos = todos.filter( obj => obj != mercadoria_id)

          }
          else
          {
            
            alert("Adcionando ao Carrinho");
            todos.push(mercadoria_id)
          }
       
          alert("Você pode ver os itens do seu carrinho"+
          "\nclicando no carrinho da barra principal do site");

          //console.log("this.state.botãocarrinho_visible", this.state.botãocarrinho_visible);

          this.setState({produtos: this.state.produtos, ordem: this.state.ordem, carrinho1: todos, display_car: this.state.display_car});

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
  
  AE_lista = () => {

    

    var now= this.state.display_car;

        if(now=='none')
            this.setState({produtos: this.state.produtos, ordem: this.state.ordem, carrinho1: this.state.carrinho1, display_car: 'flex'});
        else
            this.setState({produtos: this.state.produtos, ordem: this.state.ordem, carrinho1: this.state.carrinho1, display_car: 'none'});  
            
            
        
    

  }

  Remover = (e) => {

      

            alert("Retirando do Carrinho");
           
              var todos =  this.state.carrinho1;

              todos = todos.filter(obj => (obj != e.target.id))
              this.setState({produtos: this.state.produtos, ordem: this.state.ordem, carrinho1: todos, display_car: this.state.display_car});

              
      
  }
  
  render()
  {

    const {dados} = this.state.produtos; 
   

    

    
    //console.log("produtos", this.state.produtos);
    if(this.state.ordem == 'nula')
                  return (
                    <div>
                     
                    {
                       (this.state.display_car == 'none') ?
                       null :
                       <Lista remover={this.Remover}  style={{display:'flex'}} carrinho2={this.state.carrinho1}/>
                    } 
                    
                    
                      
                 
                   
                    <Navbar_main mudou={this.Mudou} AE_lista={() => this.AE_lista()}/>

                    
                    
                      { this.state.produtos.map((items, index) =>{

                        var backgroundColornow='#ffffff';
                              
                               if(this.state.carrinho1.includes(items.id))
                                 backgroundColornow ="#cc2738"  
                              
                                return(
                                  
                                
                                    
                                  <div key={items.id} style={{display: 'inline-flex', alignItems: 'start'}}>
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
        

        return (
          <div>
           <Lista /> 
          <Navbar_main mudou={this.Mudou} botãocarrinho={this.AE_lista}/>
          
                            {
                              
                                

                              a.map((items, index) =>{

                              
                              
                                return(
                                  
                                
                                    
                                  <div style={{display: 'inline-flex', alignItems: 'start'}}>
                                      <Mercadoria  total={this.Total(items.price, this.Adcionar_Frete(items.price) )} 
                                      frete={this.Adcionar_Frete(items.price)}
                                      key={items.id} id={items.id} 
                                      bkcn={'#ffffff'} adcionar={() => this.Adcionar(items.id)}
                                      nome={items.name} preço ={items.price} fonte={items.image}/>
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
