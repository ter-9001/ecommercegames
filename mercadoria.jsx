import React, { useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'
import carrinho from './carrinho.png'


const Mercadoria = ({nome, preço, fonte, adcionar, bkcn, frete, id, total }) => {

    //const {} = props
        
    
        return(
        
            <div style={{backgroundColor: bkcn, border: 'rgb(104, 103, 103) 0.2px solid', 
            width:'300px', margin: '10px'}}>
                <div  style={{display:"inline-block"}}>
                    <img src={carrinho} onClick={adcionar} style={{width:'40px', height:'auto', marginLeft:'200px'}}>
                        
                    </img>
                </div>
    
                        
    
            
                        <p style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: 'large',
                        color: 'rgba(102, 102, 102, 1)', marginLeft: '5px;'}}> {nome} </p>


                        <img src={fonte} style={{height:'200px', width:'auto', marginTop:"15px"}}/>
    
                        <p style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '20px', 
                        fontWeight:'bolder', color: 'rgb(22, 22, 22)', marginLeft: '15px'}}> {preço} </p>

                        


                        <div style={{display: 'flex', marginTop:'0px', marginLeft: '170px', alignItems:'start',
                    flexWrap:'wrap'}}>
                            
                            <p style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '15px', 
                            fontWeight:'bold', color: 'rgb(22, 22, 22)'}}>
                               O total é  {total} 
                            </p>
                            
                            <p  style={{fontFamily: 'Helvetica, Arial, sans-serif; font-size: 5px',   
                            color: 'rgba(102, 102, 102, 3)', marginTop: '-20px'}}> O frete é {frete} </p>
                        </div>
            </div>
    
        )
    }


export default Mercadoria