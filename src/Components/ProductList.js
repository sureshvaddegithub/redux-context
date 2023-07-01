import React from 'react'
 import { useEffect } from 'react'
import { fetchProducts } from '../redux/actions/productActions'
import {useDispatch,useSelector} from "react-redux";
import { addToCard } from '../redux/actions/cardActions';

const ProductList = () => {

    let {loading,data,error} = useSelector(state => state.products);
    // let carditem = useSelector(state=>state.carditems)

    //  console.log(carditem)

    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
 
    // console.log(data.length)

  return (
    <div >
        <h2 style={{textAlign : 'center'}}>All Items</h2>
    <div className='product-container'>

        {
            data.length>0 && (
                data.map(product=>(
                    <div key={product.id} className='product-item'>
                     <img src = {product.thumbnail} alt={product.title}/>  
                     <div>
                     <h3>{[product.title]}</h3> 
                     <p>Price : {product.price} </p>
                     </div>
                     <button onClick={()=>dispatch(addToCard(product))}>ADD TO CARD</button>
                     </div>
                ))
            )
        }
    </div>
    </div>
  )
}

export default ProductList