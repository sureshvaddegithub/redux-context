import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { checkout, removeFromCard } from '../redux/actions/cardActions'


const CardList = () => {

    let carditem = useSelector(state=>state.carditems)
    let dispatch = useDispatch();
   
    console.log(carditem)
    let Total = 0;

    if(carditem.length>0){
       carditem.forEach(element => {
         Total +=element.price;
       });
    }
  return (
    <div >
        <h2 style={{textAlign : 'center'}}>My Cart</h2>
            <div className='cardList'>
                        <div className='product-container'>

                            {
                                carditem.length>0 && (
                                    carditem.map(product=>(
                                        <div key={product.id} className='product-item card-item'>
                                        <img src = {product.thumbnail} alt={product.title}/>  
                                        <div>
                                        <h3>{[product.title]}</h3> 
                                        <p>Price : {product.price} </p>
                                        </div>
                                        <button onClick={()=>dispatch(removeFromCard(product))} >Remove From CARD</button>
                                        </div>
                                    ))
                                )
                            }
                        </div>
                        <div className='checkList'>
                              <h3 style={{ textAlign : 'center'}}>CheckList</h3>
                              {
                                carditem.length>0 && (
                                    carditem.map(product =>(
                                      <div key={product.id}>
                                        <span>{product.title}</span>
                                        <span>Rs.{product.price}</span>
                                      </div>
                                    ))
                                )
                              }
                              {
                                carditem.length>0&&(
                                    <div className='under'>
                                        <span>Total</span>
                                        <span>Rs.{Total}</span>
                                     </div>
                                )
                              }
                              {
                                carditem.length>0&&(
                                    <button style={{  padding:"10px" ,textAlign : 'center'}} onClick={()=>dispatch(checkout())}>click to CheckOut</button>
                                )
                              }
                        </div>
            </div>
    </div>
  )
}

export default CardList