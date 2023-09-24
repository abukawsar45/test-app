import { useDispatch, useSelector } from "react-redux";
import {increment, decrement, incrementByValue} from '../redux/features/counter/counterSlice'


const Counter = () => {
  // const count = useSelector(state => state.counter.count);
  const { count } = useSelector(state => state.counter);
  const dispatch = useDispatch();


  console.log(count)

  return (
    <div>
      <h1>Redux control count number</h1>
      <button onClick={()=>dispatch(incrementByValue(7  ))} >Increment by 5</button> <br />
      <button onClick={()=>dispatch(increment())} >Increment</button>
      <div>
        <h1>{ count}</h1>
      </div>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;