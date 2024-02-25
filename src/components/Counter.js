import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const increaseHandler = () => {
    dispatch({ type: "increase", payload: 5 });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const decreaseHandler = () => {
    dispatch({ type: "decrease", payload: 5 });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div>
        {show && <div className={classes.value}>{counter}</div>}
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Decrease by 5</button>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decreaseHandler}>Increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
