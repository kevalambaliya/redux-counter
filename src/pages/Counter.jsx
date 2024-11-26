import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Increment, Reset } from '../redux/Actiontype';

const Counter = () => {

  const {count} = useSelector((state)=> state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={()=> dispatch(Increment())}>INCREMENT</button>
      <button onClick={()=> dispatch(Decrement())}>DECREMENT</button>
      <button onClick={()=> dispatch(Reset())}>RESET</button>
    </div>
  )
}

export default Counter
