import React, { useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'
import carrinho from './carrinho.png'

const Navbar_main = ({mudou, name, botãocarrinho, AE_lista, pesquisar}) =>
{
	
	
	
	
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
							  <option value="a1">Ordem Alfabetica</option>
							  <option value="a2">Ordem Alfabetica Invertida</option>
							  <option value="p1">Maior Preço</option>
							  <option value="p2" >Menor Preço</option>
							  <option value="sc">Popularidade</option>                            
						  </select>
						  
							  
						</li>
	
						  
						</ul>
					
					</div>
			  
				 
			  
					<div className=" form-inline">
			  
					  
							<input className="form-control " type="search"  placeholder="Pesquise o item pelo nome" aria-label="Search"
							style={{backgroundColor: "#682ea2", width: "400px"}} onKeyUp={pesquisar}/>
			  
							
							<img onClick={AE_lista} class="rounded-circle image" src={carrinho}  style={{width: "60px", height: "auto"}} />
							
							
					</div>
					
			  
			  
			  
			  
				  </div>
						
			   
		   
			  
	  
	  
		  </nav>
		  </div>
	
	
	
	
	  )
}


export default Navbar_main