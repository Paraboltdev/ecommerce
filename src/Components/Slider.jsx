import React from 'react'
import './slider.css'
import { prevSlide, nextSlide, dotSlide } from '../features/Slices/SliderSlice';
import { useSelector, useDispatch } from 'react-redux';
import SliderProducts from '../SliderProducts';

const Slider = () => {

    const slideIndex = useSelector((state)=> state.slider.value)

    const dispatch = useDispatch()


  return (
    <div className='slider-container'>
     
        <div>
          {SliderProducts.map((product)=>(
            <img className='img-slider' src = {product.img} />
          ))}
        </div>
            
       
        <button onClick={()=> dispatch(nextSlide(slideIndex +1))}>Next</button>
        <button onClick={()=> dispatch(nextSlide(slideIndex -1))}>Prev</button>
    </div>
  )
}

export default Slider