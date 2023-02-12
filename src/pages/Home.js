import React from 'react'
import NavBar from '../component/NavBar'
import product from '../products'
import {Add_TO_CART} from '../actions/action'
import { useDispatch } from 'react-redux'
function Home() {
    const dispatch = useDispatch();
  return (
    <>
        <NavBar/>
        <div className='container'>
            <div className='row mt-5'>
                {
                    product.products.map((value,index)=>
                    <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12' key={value.id}>
                        <div className="card mb-5" style={{width: '18rem'}}>
                        <img src={value.thumbnail} className="card-img-top" style={{height: '10rem'}}/>
                        <div className="card-body">
                            <h5 className="card-title">{value.title.substring(0,15)}</h5>
                            <p className="card-text">{value.description.substring(0,50)}</p>
                            <p><b>Price : {value.price}/-</b></p>
                            <button 
                            onClick={()=>{dispatch(Add_TO_CART(value))}}
                            href="/" className="btn btn-primary">Add to cart</button>
                        </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    </>
  )
}

export default Home;
