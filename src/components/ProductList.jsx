import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../../../../my-app/src/redux/slice/productSlice';

function ProductList() {
    const  dispatch = useDispatch();
    const {products} = useSelector((store)=> store.products);
    console.log(products)
    useEffect(()=>{
       dispatch(getAllProducts);

    }, [])
  return (
    <div>{products}</div>
  )
}

export default ProductList