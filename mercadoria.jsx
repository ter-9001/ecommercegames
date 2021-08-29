import React, { useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'
import carrinho from './carrinho.png'


const Mercadoria = ({nome, preço, fonte, adcionar, bkcn, frete, id, total, score }) => {

    //const {} = props
        
    
        return(
        
            <div style={{backgroundColor: bkcn, border: 'rgb(104, 103, 103) 0.2px solid', 
            width:'300px', margin: '10px'}}>
                
                <div style={{display: 'flex',justifyContent:'space-between', position: 'relative', alignItems:'end', flexWrap:'wrap',
            textAlign: 'center' }}>
                    
                     <p  style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '15px',   
                     color: 'rgba(102, 102, 102, 1)', marginLeft: '5px', textAlign: 'left'}}> Score: {score} </p>
                    
                    <img src={carrinho} onClick={adcionar} style={{width:'60px', height:'auto'}} />
                    
                </div>
    
                        
    
                <div  style={{justifyContent:'center', position: 'relative', alignItems:'center',
            textAlign: 'center', marginTop: '20px'}}>

                        <p style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: 'large',
                        color: 'rgba(102, 102, 102, 1)', marginLeft: '5px;'}}> {nome} </p>


                        <img src={fonte} style={{height:'200px', width:'auto', marginTop:"15px", margin: "10px"}}/>
    
                        <p style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '20px', 
                        fontWeight:'bolder', color: 'rgb(22, 22, 22)', marginLeft: '15px'}}> R$ {preço} </p>

                </div>        


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